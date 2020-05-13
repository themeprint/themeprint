import { isString, isNil } from '@utilz/types'
import { unit } from './unit'
import { css } from '@theme-ui/css'

export const resolveBorder = ({ theme, params }) => {
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
  if (!parts || parts.length !== 3) {
    throw new Error('Expected three part string parameter.')
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
    borderColor: parts[2],
  })

  const resolvedValues = cssFunc(theme)
  const resolvedBorderWidth = unit(resolvedValues.borderWidth)
  return `${resolvedBorderWidth.css()} ${resolvedValues.borderStyle} ${
    resolvedValues.borderColor
  }`
}
