// TODO: add margin, padding and other shorthand functions
import { css } from '@theme-ui/css'
import { isNil, isString } from '@utilz/types'

export const border = value => theme => {
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
  return `${result.borderWidth} ${result.borderStyle} ${result.color}`
}
