import { isString } from '@utilz/types'
import { resolveScale } from './resolve-scale'
import { getSizeIndex } from './size'

export const resolveFont = ({ theme, params }) => {
  if (!params || params.length === 0) {
    throw new Error('No parameters specified.')
  }

  return resolveScale({
    theme,
    property: 'fontSizes',
    index: isString(params[0]) ? getSizeIndex(params[0]) : params[0],
  })
}
