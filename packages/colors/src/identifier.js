import { isString, isNil, numeric } from '@utilz/types'

const chars = value => /^[a-zA-Z]+$/.test(value)

// Provides parsing and formatting support for a color identifier
// made up of name and index, e.g. primary300
export const identifier = value => {
  if (isNil(value)) {
    return undefined
  }

  if (!isString(value)) {
    return undefined
  }

  if (value === '') {
    return undefined
  }

  const split = value.split(/^([a-zA-Z]+)/).filter(v => v)

  if (split.length === 1 && chars(split[0])) {
    return {
      name: split[0],
      index: undefined,
      format: () => `${split[0]}`,
    }
  }

  if (split.length !== 2) {
    return undefined
  }

  const index = numeric(split[1])

  if (!index.isValid) {
    return undefined
  }

  return {
    name: split[0],
    index: index.value,
    format: () => `${split[0]}${index.value}`,
  }
}
