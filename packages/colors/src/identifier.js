import { isString, isNil } from '@utilz/types'

// Provides parsing and formatting support for a color identifier
// made up of name and index, e.g. primary300
export const identifier = value => {
  if (isNil(value)) {
    throw new Error('No value specified.')
  }

  if (!isString(value)) {
    throw new Error('Value must be a string.')
  }

  if (value === '') {
    return {
      name: undefined,
      index: undefined,
    }
  }

  // const split = value.split(/([0-9]+)/)
  const split = value.split(/^([a-zA-Z]+)/)
  console.log(split)
}
