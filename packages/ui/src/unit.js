import { numeric, isString, isNil } from '@utilz/types'

const isValidUnit = value => {
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

export const unit = value => {
  if (isNil(value)) {
    throw new Error('No value specified.')
  }

  const invalid = () => {
    throw new Error(
      `The value '${
        isString(value) ? value : JSON.stringify(value)
      }' is not a valid unit.`
    )
  }

  const number = numeric(value)
  if (number.isValid) {
    return {
      value: number.value,
      unit: 'px',
      unitless: true,
      css: () => `${number.value}px`,
    }
  }

  if (isString(value)) {
    const numParts = value.split(/([\d|.]+)/).filter(Boolean)
    if (!numParts || numParts.length !== 2) {
      invalid()
    }

    const number = numeric(numParts[0])
    if (!number.isValid) {
      invalid()
    }

    if (!isValidUnit(numParts[1])) {
      invalid()
    }

    return {
      value: number.value,
      unit: numParts[1],
      unitless: false,
      css: () => `${number.value}${numParts[1]}`,
    }
  }

  invalid()
}
