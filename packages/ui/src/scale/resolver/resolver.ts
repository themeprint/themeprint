import { resolveColor } from './color'
import { resolveSpace } from './space'
import { resolveFont } from './font'
import { resolveBorder } from './border'

// e.g. id is 'app' or 'lib'
// type is 'font', 'space', etc.
// value can be any value
export const resolver = options => ({ id, fallback, theme }) => ({
  type,
  params,
}) => {
  const typeMap = {
    color: props => resolveColor(props),
    space: props => resolveSpace(props),
    font: props => resolveFont(props),
    border: props => resolveBorder(props),
  }

  if (!typeMap[type]) {
    throw new Error(`Unknown type to resolve '${type}'.`)
  }

  const func = typeMap[type]
  try {
    return func({ theme, params, options })
  } catch (error) {
    return fallback({ message: error.message, theme, params })
  }
}
