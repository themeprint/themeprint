import { isObject } from '@utilz/types'

const defaultId = 'app'

const defaultScaleSeperator = '-'

const defaultFallback = ({ message, value, theme }) => {
  throw new Error(message)
}

const resolveColor = ({ value, theme, fallback, scaleSeparator }) => {
  if (!isObject(value)) {
    throw new Error('Not implemented.')
  }

  const scaleName = `${value.name}${scaleSeparator}scale`

  if (!theme) {
    return fallback({ message: 'No theme provided.', value, theme })
  }

  if (!theme.colors) {
    return fallback({
      message: 'No theme colors property found.',
      value,
      theme,
    })
  }

  if (!theme.colors.hasOwnProperty(scaleName)) {
    return fallback({
      message: `No colors property scale found on the theme with name '${scaleName}.`,
      value,
      theme,
    })
  }

  const range = theme.colors[scaleName]
  if (value.index < 0 || value.index >= range.length) {
    return fallback({
      message: `Index value '${value.index}' is out of range for the theme colors property ${scaleName}.`,
      value,
      theme,
    })
  }

  return range[value.index]
}

// e.g. id is 'app' or 'lib'
// type is 'font', 'space', etc.
// value can be any value
const defaultResolver = ({ id, fallback, theme, scaleSeparator }) => ({
  type,
  value,
}) => {
  // TODO: support both object value of { name, index } and string values

  switch (type) {
    case 'color':
      return resolveColor({ value, theme, fallback, scaleSeparator })
    default:
      throw new Error(`Unknown type to resolve '${type}'.`)
  }
}

const getSizeIndex = sizeName => {
  switch (sizeName) {
    case 'xxxsmall':
    case 'xxxs':
      return 0
    case 'xxsmall':
    case 'xxs':
      return 1
    case 'xs':
    case 'xsmall':
      return 2
    case 's':
    case 'small':
      return 3
    case 'medium':
    case 'm':
      return 4
    case 'lg':
    case 'large':
      return 5
    case 'xlg':
    case 'xlarge':
      return 6
    case 'xxlg':
    case 'xxlarge':
      return 7
    case 'xxxlg':
    case 'xxxlarge':
      return 8
    default:
      throw new Error(`Unknown size '${sizeName}'.`)
  }
}

export const color = options => value => theme => {
  const { id = defaultId, fallback = defaultFallback } = options
  const {
    resolver = defaultResolver({ id, fallback, theme, scaleSeparator: '-' }),
  } = options
  return resolver({ type: 'color', value })
}

export const scale = (name, index) => ({
  name,
  index,
})

export const space = ({ fallback }) => sizeName => theme => {
  // TODO inspect theme
  const index = getSizeIndex(sizeName)
  return `${theme.space[index]}px`
}

export const font = ({ fallback }) => sizeName => theme => {
  // TODO inspect theme
  const index = getSizeIndex(sizeName)
  return `${theme.fontSizes[index]}px`
}

// TODO: get size from theme border
export const border = ({ fallback }) => (
  sizeName,
  type,
  colorName,
  colorIndex
) => theme => {
  const index = getSizeIndex(sizeName)
  return `${index + 1}px ${type} ${color(colorName, colorIndex)(theme)}`
}

export const configure = (options = {}) => {
  const { fallback = defaultFallback } = options
  return {
    color: color({ fallback }),
    space: space({ fallback }),
    font: font({ fallback }),
    border: border({ fallback }),
  }
}
