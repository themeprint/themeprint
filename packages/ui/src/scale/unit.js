import { isNumeric, isString, isNil } from '@utilz/types'

export const unit = value => {
  if (isNil(value)) {
    throw new Error('No value specified.')
  }

  if (isNumeric(value)) {
    return {
      value: value,
      unit: 'px',
    }
  }

  if (isString(value)) {
    return ''
  }

  throw new Error('Expected string or numeric value.')
}
