import { isNil } from '@utilz/types'
import { resolveScale } from './scale'
import { css } from '@theme-ui/css'

export const resolveColor = ({ theme, params, options }) => {
  if (isNil(params) || params.length === 0) {
    throw new Error('No color parameters specified.')
  }

  // TODO: support 'primary', ('primary', 1), ('primary', 100), 'primary1', and 'primary100'
  const hasIndex = params.length === 2

  if (hasIndex) {
    return resolveScale({
      theme,
      property: `colors.${params[0]}${options.scaleSeparator}scale`,
      index: params[1],
    })
  }

  const cssFunc = css({
    color: params[0],
  })

  const resolvedValues = cssFunc(theme)
  return resolvedValues.color
}
