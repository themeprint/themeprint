import { isString, isNil } from '@utilz/types'
import { unit } from '../../unit'
import { css } from '@theme-ui/css'
import { resolveColor } from './color'

export const resolveBorder = ({ theme, params, options }) => {
  if (isNil(params) || params.length === 0) {
    throw new Error('No parameters specified.')
  }

  if (!theme) {
    throw new Error('No theme provided.')
  }

  if (params.length !== 1 || !isString(params[0])) {
    throw new Error('Expected single string parameter.')
  }

  const parts = params[0].split(' ').map(v => v.trim())
  if (isNil(parts) || (parts.length !== 3 && parts.length !== 4)) {
    throw new Error('Expected three or four part string parameter.')
  }

  const borderWidthUnit = unit(parts[0])

  if (borderWidthUnit.unitless) {
    if (!theme.borderWidths) {
      throw new Error(`No scale found on theme at 'borderWidths'.`)
    }
  }

  const cssFunc = css({
    borderWidth: borderWidthUnit.value,
    borderStyle: parts[1],
  })

  const hasIndex = parts.length === 4
  const colorParams = hasIndex ? [parts[2], parts[3]] : [parts[2]]
  const resolvedBorderColor = resolveColor({
    theme,
    params: colorParams,
    options,
  })

  const resolvedValues = cssFunc(theme)
  const resolvedBorderWidth = unit(resolvedValues.borderWidth)

  return `${resolvedBorderWidth.css()} ${
    resolvedValues.borderStyle
  } ${resolvedBorderColor}`
}
