// TODO: add margin, padding and other shorthand functions
import { css } from '@theme-ui/css'
import { isNil, isString, isNumeric } from '@utilz/types'
import { unit } from './unit'

function isNumericGuard(value: number | string | undefined): value is number {
  return isNumeric(value)
}

export const border = (value: string) => (theme: Record<string, unknown>) => {
  if (isNil(value)) {
    throw new Error('No border value specified.')
  }

  if (!isString(value)) {
    throw new Error('Unexpected non string border value.')
  }

  if (value === '') {
    throw new Error('Border value must have width, style, and color.')
  }

  const split = value.split(' ').filter(v => v)
  if (split.length !== 3) {
    throw new Error('Border value must have width, style, and color.')
  }

  const process = css({
    borderWidth: split[0],
    borderStyle: split[1],
    color: split[2],
  })

  const result = process(theme)
  const borderWidth = isNumericGuard(result.borderWidth)
    ? unit(result.borderWidth).css()
    : result.borderWidth

  return `${borderWidth} ${result.borderStyle} ${result.color}`
}
