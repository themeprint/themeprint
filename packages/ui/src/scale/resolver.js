import { isString } from '@utilz/types'
import { getSizeIndex } from './size'
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

const resolveColor = ({ theme, params, options }) => {
  if (!params || params.length === 0) {
    throw new Error('No color parameters specified.')
  }

  // TODO: support 'primary', ('primary', 1), ('primary', 100), 'primary1', and 'primary100'
  const name = params[0]
  const index = params[1]

  return resolveScale({
    theme,
    property: `colors.${name}${options.scaleSeparator}scale`,
    index,
  })
}

const resolveSize = ({ theme, params, property }) => {
  if (!params || params.length === 0) {
    throw new Error('No parameters specified.')
  }

  return resolveScale({
    theme,
    property,
    index: isString(params[0]) ? getSizeIndex(params[0]) : params[0],
  })
}

const resolveSpace = props => resolveSize({ ...props, property: 'space' })

const resolveFont = props => resolveSize({ ...props, property: 'fontSize' })

const resolveBorder = ({ theme, params }) => {
  throw new Error('Not implemented')
}

// e.g. id is 'app' or 'lib'
// type is 'font', 'space', etc.
// value can be any value
export const defaultResolver = options => ({ id, fallback, theme }) => ({
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
