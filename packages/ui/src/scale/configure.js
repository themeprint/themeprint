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

export const configure = (options = {}) => {
  const { fallback = defaultFallback } = options
  return {
    color: defaultSetup('color')({ fallback }),
    space: defaultSetup('space')({ fallback }),
    font: defaultSetup('font')({ fallback }),
    border: defaultSetup('border')({ fallback }),
  }
}

const defaultConfiguration = configure()
export const color = defaultConfiguration.color
export const space = defaultConfiguration.space
export const font = defaultConfiguration.font
export const border = defaultConfiguration.border
