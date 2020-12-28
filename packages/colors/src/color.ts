import chroma from 'chroma-js'
import { isObject, isNil } from '@utilz/types'

export interface Hsl {
  h: number
  s: number
  l: number
}

const clip = (min: number, max: number) => (value: number) => {
  if (isNil(value)) {
    throw new Error('No value specified.')
  }

  if (value < min) {
    return min
  }

  if (value > max) {
    return max
  }

  return value
}

const round = (value: number) => Math.round(value)

const normaliseHsl = (value: Hsl): Hsl => {
  const clipPercentage = clip(0, 100)

  const percentage = {
    h: value.h,
    s: value.s <= 1 ? value.s * 100 : value.s,
    l: value.l <= 1 ? value.l * 100 : value.l,
  }

  const normalised = {
    h: clip(0, 359)(percentage.h),
    s: clipPercentage(percentage.s),
    l: clipPercentage(percentage.l),
  }

  return normalised
}

export const stringToHsl = (hex: string): Color => {
  const ch = chroma(hex).hsl()

  return color({
    h: isNaN(ch[0]) ? 0 : ch[0],
    s: ch[1],
    l: ch[2],
  })
}

export const toHsl = (value: string | Hsl): Color => {
  if (!value) {
    throw new Error('No value specified.')
  }

  if (isHsl(value)) {
    return color(normaliseHsl(value))
  }

  return stringToHsl(value)
}

export const isColor = (value: any) => {
  if (!value) {
    return false
  }

  if (!isObject(value)) {
    return false
  }

  if (
    value.hasOwnProperty('value') &&
    value.hasOwnProperty('css') &&
    value.hasOwnProperty('format')
  ) {
    return true
  }

  return false
}

export const isHsl = (value: any): value is Hsl => {
  if (!value) {
    return false
  }

  if (!isObject(value)) {
    return false
  }

  if (
    value.hasOwnProperty('h') &&
    value.hasOwnProperty('s') &&
    value.hasOwnProperty('l')
  ) {
    return true
  }

  return false
}

export const toChroma = (value: Hsl) =>
  chroma.hsl(value.h, value.s / 100, value.l / 100)

export interface Color {
  value: Hsl
  css: (format?: CssFormat) => string
  format: () => Hsl
}

export type CssFormat = 'hsl' | 'hex' | 'hexa' | 'rgb' | 'rgba'

// Only support HSL
export const color = (obj: Hsl): Color => {
  if (!obj) {
    throw new Error('No value specified.')
  }

  if (!isHsl(obj)) {
    throw new Error('Value is not a valid HSL object.')
  }

  const value = normaliseHsl(obj)
  const chromaValue = toChroma(value)

  return {
    value,
    css: (format: CssFormat = 'hsl') => {
      switch (format) {
        case 'hsl':
          return chromaValue.css('hsl')
        case 'hex':
          return chromaValue.hex('rgb')
        case 'hexa':
          return chromaValue.hex('rgba')
        case 'rgb':
          const [r, g, b] = chromaValue.rgb()
          return `rgb(${r},${g},${b})`
        case 'rgba':
          const [ra, ga, ba, aa] = chromaValue.rgba()
          return `rgba(${ra},${ga},${ba},${aa})`
        default: {
          throw new Error(`Unknown format '${format}'.`)
        }
      }
    },
    format: () => ({
      h: round(value.h),
      s: round(value.s),
      l: round(value.l),
    }),
  }
}

export const black = () => color({ h: 0, s: 0, l: 0 })

export const white = () => color({ h: 0, s: 0, l: 100 })
