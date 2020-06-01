import { isString, isNil } from '@utilz/types'

export const splitNumeric = value => {
  if (isNil(value)) {
    throw new Error('No value specified.')
  }

  if (!isString(value)) {
    throw new Error('Value must be a string.')
  }

  if (value === '') {
    return {
      string: undefined,
      number: undefined,
    }
  }

  // const split = value.split(/([0-9]+)/)
  const split = value.split(/^([a-zA-Z]+)/)
  console.log(split)
}
