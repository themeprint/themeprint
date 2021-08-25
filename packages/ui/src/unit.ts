import { toNumeric, isString, isNil, Nullish } from '@utilz/types'

const isValidUnit = (value?: Nullish<string>) => {
  if (!value) {
    return false
  }

  if (!isString(value)) {
    return false
  }

  const validUnits = [
    'cm',
    'mm',
    'in',
    'px',
    'pt',
    'pc',
    'em',
    'ex',
    'ch',
    'rem',
    'vw',
    'vh',
    'vmin',
    'vmax',
    '%',
  ]

  return validUnits.includes(value)
}

export interface Unit {
  value: number
  unit: string
  unitless: boolean
  css: () => string
}

function isStringGuard(value?: Nullish<number | string>): value is string {
  return isString(value)
}

export const unit = (value?: Nullish<number | string>): Unit => {
  if (isNil(value)) {
    throw new Error('No value specified.')
  }

  const invalid = (): never => {
    throw new Error(
      `The value '${
        isString(value) ? value : JSON.stringify(value)
      }' is not a valid unit.`
    )
  }

  const number = toNumeric(value)

  if (number.isValid) {
    return {
      value: number.value,
      unit: 'px',
      unitless: true,
      css: () => `${number.value}px`,
    }
  }

  if (isStringGuard(value)) {
    const numParts = value.split(/([\d|.]+)/).filter(Boolean)
    if (!numParts || numParts.length !== 2) {
      return invalid()
    }

    const number = toNumeric(numParts[0])
    if (!number.isValid || !number.value) {
      return invalid()
    }

    if (!isValidUnit(numParts[1])) {
      return invalid()
    }

    return {
      value: number.value,
      unit: numParts[1],
      unitless: false,
      css: () => `${number.value}${numParts[1]}`,
    }
  }

  return invalid()
}
