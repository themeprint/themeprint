import { configure } from './scale'

export const fromScale = (name, valueOrRange, options) =>
  configure({ name })(valueOrRange, options)
