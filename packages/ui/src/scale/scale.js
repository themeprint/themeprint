import { resolver as defaultResolver } from './resolver'

const defaultId = 'app'

const defaultScaleSeperator = '-'

const defaultFallback = ({ message, params, theme }) => {
  throw new Error(message)
}

const defaultSetup = type => options => (...params) => theme => {
  const { id = defaultId, fallback = defaultFallback } = options
  const {
    resolver = defaultResolver({
      scaleSeparator: defaultScaleSeperator,
    })({
      id,
      fallback,
      theme,
    }),
  } = options
  return resolver({ type, params })
}

export const color = defaultSetup('color')
export const space = defaultSetup('space')
export const font = defaultSetup('font')
export const border = defaultSetup('border')

export const configure = (options = {}) => {
  const { fallback = defaultFallback } = options
  return {
    color: color({ fallback }),
    space: space({ fallback }),
    font: font({ fallback }),
    border: border({ fallback }),
  }
}
