import chroma from 'chroma-js'
import { deepmerge } from '@utilz/deepmerge'
import { color, isColor, stringToHsl, toChroma } from './color'
import { toScaleName } from './scale-name'

const colorsFromEdges = (start, end, number = 9) => {
  return chroma
    .scale([toChroma(start.value), toChroma(end.value)])
    .colors(number)
    .map(hex => stringToHsl(hex))
}

const colorsFromEdgesAndCenter = (start, center, end, number) => {
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

const colorsFromCenter = (center, number, generator) => {
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
const rotateHueByDegrees = degrees => ({ value, ...rest }) => {
  const modulo = (x, n) => ((x % n) + n) % n
  const newHue = modulo(value.h + degrees, 360)
  return color({ h: newHue, s: value.s, l: value.l })
}

const validateRange = obj => {
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

export const rotateHue = degrees => {
  const rotate = rotateHueByDegrees(degrees)
  return {
    previous: color => rotate(color),
    next: color => rotate(color),
  }
}

const isOdd = num => num % 2

const centerIndex = array => {
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

const defaultFormatter = color => color.css()

export const configure = defaultOptions => (valueOrRange, options) => {
  const resolvedOptions = deepmerge(
    {
      number: 9,
      generator: rotateHue(80),
      seperator: '-',
      format: defaultFormatter,
    },
    defaultOptions,
    options
  )

  // TODO: validate resolved options
  const { number, name, seperator, format, generator } = resolvedOptions

  const result = (value, scale) => {
    if (name) {
      return {
        [name]: format(value),
        [toScaleName(seperator)(name)]: scale.map(c => format(c)),
      }
    }

    return scale.map(c => format(c))
  }

  const isRange = !isColor(valueOrRange)

  if (isRange) {
    const { start, center, end } = valueOrRange
    validateRange(valueOrRange)

    const palette = center
      ? colorsFromEdgesAndCenter(start, center, end, resolvedOptions.number)
      : colorsFromEdges(start, end, resolvedOptions.number)

    return result(palette[centerIndex(palette)], palette)
  }

  // Assume center value
  return result(valueOrRange, colorsFromCenter(valueOrRange, number, generator))
}

export const scale = configure()
