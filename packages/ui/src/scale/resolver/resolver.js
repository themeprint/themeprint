import { resolveColor } from './resolve-color'
import { resolveSpace } from './resolve-space'
import { resolveFont } from './resolve-font'
import { resolveBorder } from './resolve-border'

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
