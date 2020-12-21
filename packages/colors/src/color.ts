import chroma from 'chroma-js'
import { isObject, isNil } from '@utilz/types'

const clip = (min, max) => value => {
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

const round = value => Math.round(value)

const normaliseHsl = value => {
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

export const stringToHsl = hex => {
  const ch = chroma(hex).hsl()
  return color({
    h: isNaN(ch[0]) ? 0 : ch[0],
    s: ch[1],
    l: ch[2],
  })
}

export const toHsl = value => {
  if (!value) {
    throw new Error('No value specified.')
  }

  if (isHsl(value)) {
    return normaliseHsl(value)
  }

  return stringToHsl(value)
}

export const isColor = value => {
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

export const isHsl = value => {
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

export const toChroma = value =>
  chroma({
    h: value.h,
    s: value.s / 100,
    l: value.l / 100,
  })

// Only support HSL
export const color = obj => {
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
    css: (format = 'hsl') => {
      switch (format) {
        case 'hsl':
          return chromaValue.css('hsl')
        case 'hex':
          return chromaValue.hex('rgb')
        case 'hexa':
          return chromaValue.hex('rgba')
        case 'rgb':
          return chromaValue.css('rgb')
        case 'rgba':
          return chromaValue.css('rgba')
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
