import chroma from 'chroma-js'
import { deepmerge } from '@utilz/deepmerge'
import { isObject } from '@utilz/types'
import { Color, color, Hsl, toColor } from './color'
import { ColorMode } from '@theme-ui/core'
import * as CSS from 'csstype'

const toChroma = (value: Hsl) =>
  chroma.hsl(value.h, value.s / 100, value.l / 100)

const colorsFromEdges = (
  start: Color,
  end: Color,
  number: number = 9
): Color[] => {
  return chroma
    .scale([toChroma(start.value), toChroma(end.value)])
    .colors(number)
    .map((hex: string) => toColor(hex))
}

const colorsFromEdgesAndCenter = (
  start: Color,
  center: Color,
  end: Color,
  number: number
): Color[] => {
  if (number < 3) {
    throw new Error('Unexpected number for range.')
  }

  if (!isOdd(number)) {
    throw new Error('Range must be an odd number.')
  }

  if (number === 3) {
    return [start, center, end]
  }

  const centerIndex = Math.round((number - 1) / 2)

  const firstHalf = colorsFromEdges(start, center, centerIndex + 1).slice(
    1,
    centerIndex
  )

  const secondHalf = colorsFromEdges(center, end, centerIndex + 1).slice(
    1,
    centerIndex
  )

  return [start]
    .concat(firstHalf)
    .concat([center])
    .concat(secondHalf)
    .concat([end])
}

const colorsFromCenter = (
  center: Color,
  number: number,
  generator: ScaleGenerator
): Color[] => {
  if (!isOdd(number)) {
    throw new Error('Unexpected number for range.')
  }

  if (number === 1) {
    return [center]
  }

  const halfSize = (number - 1) / 2

  const firstHalf = []
  let color = center
  for (let i = 0; i < halfSize; i++) {
    color = generator.previous(color)
    firstHalf.push(color)
  }

  const secondHalf = []
  color = center
  for (let i = 0; i < halfSize; i++) {
    color = generator.next(color)
    secondHalf.push(color)
  }

  return firstHalf.concat([center]).concat(secondHalf)
}

// See https://blog.logrocket.com/how-to-manipulate-css-colors-with-javascript-fb547113a1b8/
const rotateHueByDegrees = (degrees: number) => ({ value }: { value: Hsl }) => {
  const modulo = (x: number, n: number) => ((x % n) + n) % n
  const newHue = modulo(value.h + degrees, 360)
  return color({ h: newHue, s: value.s, l: value.l })
}

const validateRange = (obj: ColorScale) => {
  if (!obj) {
    throw new Error('No range specified.')
  }

  if (!obj.hasOwnProperty('start')) {
    throw new Error('Range must have start value.')
  }

  if (!obj.hasOwnProperty('end')) {
    throw new Error('Range must have end value.')
  }
}

export const rotateHue = (degrees: number) => {
  const rotate = rotateHueByDegrees(degrees)
  return {
    previous: (color: Color) => rotate(color),
    next: (color: Color) => rotate(color),
  }
}

const isOdd = (num: number) => num % 2

const centerIndex = (array: unknown[]) => {
  if (!array) {
    throw new Error('No array specified.')
  }

  if (!Array.isArray(array)) {
    throw new Error('No array specified.')
  }

  if (array.length === 0) {
    throw new Error('Unexpected empty array.')
  }

  if (array.length === 1) {
    return 0
  }

  return Math.round((array.length - 1) / 2)
}

const defaultFormatter = (color: Color) => color.css()

export interface ScaleGenerator {
  next: (color: Color) => Color
  previous: (color: Color) => Color
}

export interface ScaleOptions {
  number: number
  generator: ScaleGenerator
  format: (color: Color) => string
}

// TODO: allow center or start, center, end
export interface ColorScale {
  name: string
  start?: Color
  center?: Color
  end?: Color
}

// Converts a collection of colors to a named scale, e.g. primary100...primary900
// Uses the name as an alias to the center scale value
// TODO: assumes center value
export const toNamedScale = ({
  name,
  scale,
  format,
}: {
  name: string
  scale: Color[]
  format: (color: Color) => string
}): ColorMode => {
  // TODO: support type 'array' or 'object'
  // default to object, so return { xxs: .., xs: .. etc. }
  // if type is array, return scale.map(c => format(c))
  // Generate object names automatically based off of number value
  const values: CSS.Property.Color[] = scale.map((c) => format(c))

  const seed: Record<string, CSS.Property.Color> = {}
  const obj = values.reduce((obj, v, i) => {
    obj[`${name}${(i + 1) * 100}`] = v
    return obj
  }, seed)

  return {
    [name]: values[centerIndex(values)], // middle value,
    ...obj,
  }
}

// value is an object with { name, start, center, end }
// name is mandatory
// must have center, or start and end, or start, center, end
// if just center we generate a scale around that center value
// or a range with start, end and optional center values
export const configure = (defaultOptions?: Partial<ScaleOptions>) => (
  value: ColorScale,
  options?: Partial<ScaleOptions>
) => {
  const resolvedOptions = deepmerge<ScaleOptions>(
    {
      number: 9,
      generator: rotateHue(80),
      format: defaultFormatter,
    },
    defaultOptions,
    options
  )

  if (!isObject(value)) {
    throw new Error('Value is invalid object.')
  }

  // TODO: support any odd number of elements => 1
  if (resolvedOptions.number !== 9) {
    throw new Error('Only 9 elements are currently supported.')
  }

  // TODO: validate resolved options
  const { number, format, generator } = resolvedOptions
  const { name, start, center, end } = value

  if (!name) {
    throw new Error('Must specify scale name.')
  }

  if (center && !start && !end) {
    return toNamedScale({
      name,
      scale: colorsFromCenter(center, number, generator),
      format,
    })
  }

  validateRange(value)

  // TODO: allow valid combinations of start, center, end
  const palette = center
    ? colorsFromEdgesAndCenter(start!, center!, end!, resolvedOptions.number)
    : colorsFromEdges(start!, end!, resolvedOptions.number)

  return toNamedScale({
    name,
    scale: palette,
    format,
  })
}

export const scale = configure()
