import { isObject } from '@utilz/types'
import { get } from './get'

// Gets the scale from the theme
// E.g. getScale({ theme, 'colors.primary-scale' })
const getScale = ({ theme, property }) => {
  let notFoundKey = undefined
  const scale = get(theme, property, undefined, ({ key }) => {
    notFoundKey = key
  })

  if (notFoundKey) {
    return undefined
  }

  return scale
}

const resolveScale = ({ theme, property, index }) => {
  if (!theme) {
    throw new Error('No theme provided.')
  }

  const scale = getScale({
    theme,
    property,
  })

  if (!scale) {
    throw new Error(`No scale found on theme at '${property}'.`)
  }

  // TODO: support optional index value mapping
  // TODO: also support optional 0.0 to 1.0 index value mapping
  if (index < 0 || index >= scale.length) {
    throw new Error(
      `Index value '${index}' is out of range for the theme ${property} property ${scaleName}.`
    )
  }

  return scale[index]
}

// e.g. id is 'app' or 'lib'
// type is 'font', 'space', etc.
// value can be any value
export const defaultResolver = ({ id, fallback, theme, scaleSeparator }) => ({
  type,
  params,
}) => {
  // TODO: support both object value of { name, index } and string values

  switch (type) {
    case 'color':
      try {
        if (!isObject(params[0])) {
          throw new Error('Not implemented.')
        }

        return resolveScale({
          theme,
          property: `colors.${params[0].name}${scaleSeparator}scale`,
          index: params[0].index,
        })
      } catch (error) {
        return fallback({ message: error.message, params, theme })
      }
    case 'space':
      try {
        return resolveScale({
          theme,
          property: 'space',
          index: isString(params[0]) ? getSizeIndex(params[0]) : params[0],
        })
      } catch (error) {
        return fallback({ message: error.message, params, theme })
      }
    default:
      throw new Error(`Unknown type to resolve '${type}'.`)
  }
}
