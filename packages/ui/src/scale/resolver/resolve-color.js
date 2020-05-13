import { resolveScale } from './resolve-scale'

export const resolveColor = ({ theme, params, options }) => {
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
