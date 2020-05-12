import { isString } from '@utilz/types'

export const resolveBorder = ({ theme, params }) => {
  if (!params || params.length === 0) {
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

  const borderWidth = parts[0]
  const borderType = parts[1]
  const borderColor = parts[2]

  console.log(borderWidth, borderType, borderColor)
}
