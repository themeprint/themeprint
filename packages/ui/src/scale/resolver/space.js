import { isString, isNil } from '@utilz/types'
import { resolveScale } from './scale'
import { getSizeIndex } from './size'

export const resolveSpace = ({ theme, params }) => {
  if (isNil(params) || params.length === 0) {
    throw new Error('No parameters specified.')
  }

  return resolveScale({
    theme,
    property: 'space',
    index: isString(params[0]) ? getSizeIndex(params[0]) : params[0],
  })
}
