import { useMedia } from 'react-use'
import { unit } from './unit'

// Allow indexing or property name to be used
// e.g. breakpoints[0] or breakpoints.phone
export const createBreakpoints = sizes => {
  const sizeKeys = Object.keys(sizes)
  const bps = sizeKeys.map(s => unit(sizes[s]).css())

  const min = size => {
    if (!sizeKeys.includes(size)) {
      throw new Error(`No breakpoint size '${size}' found.`)
    }

    return `(min-width: ${sizes[size]})`
  }

  const useMinMediaQuery = size => {
    return useMedia(min(size))
  }

  return {
    mediaQuery: {
      min: size => `@media ${min(size)}`,
    },
    breakpoints: new Proxy(bps, {
      get: (target, name) => {
        if (Object.keys(sizes).includes(name)) {
          return sizes[name]
        }

        return target[name]
      },
    }),
    useMediaQuery: () => ({
      min: useMinMediaQuery,
    }),
  }
}
