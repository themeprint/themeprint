import { get } from '@utilz/get'

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

export const resolveScale = ({ theme, property, index }) => {
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
