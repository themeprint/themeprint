import { isString, isNil } from '@utilz/types'
import { resolveScale } from './scale'
import { getSizeIndex } from './size'
import { unit } from '../../unit'

export const resolveFont = ({ theme, params }) => {
  if (isNil(params) || params.length === 0) {
    throw new Error('No parameters specified.')
  }

  const value = resolveScale({
    theme,
    property: 'fontSizes',
    index: isString(params[0]) ? getSizeIndex(params[0]) : params[0],
  })

  return unit(value).css()
}
