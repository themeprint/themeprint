import { isNil, isObject } from '@utilz/types'
import { useMedia } from 'react-use'
import { unit } from './unit'

// Allow indexing or property name to be used
// e.g. breakpoints[0] or breakpoints.phone
export const createBreakpoints = sizes => {
  if (isNil(sizes)) {
    throw new Error(`No breakpoints defined.`)
  }

  if (!isObject(sizes)) {
    throw new Error(`Unexpected non object breakpoints.`)
  }

  const sizeKeys = Object.keys(sizes)
  const breakpoints = sizeKeys.map(s => unit(sizes[s]).css())

  sizeKeys.forEach(key => {
    breakpoints[key] = unit(sizes[key]).css()
  })

  const min = size => {
    if (isNil(size)) {
      throw new Error(`No breakpoint size specified.`)
    }

    if (!sizeKeys.includes(size)) {
      throw new Error(`No breakpoint size '${size}' found.`)
    }

    return `(min-width: ${breakpoints[size]})`
  }

  const useMinMediaQuery = size => {
    return useMedia(min(size))
  }

  return {
    mediaQuery: {
      min: size => `@media ${min(size)}`,
    },
    breakpoints,
    useMediaQuery: () => ({
      min: useMinMediaQuery,
    }),
  }
}
