import { isNil, isFunction, Nullable } from '@utilz/types'
import { unit } from './unit'
import { deepmerge } from '@utilz/deepmerge'

// TODO: type

const unfold = (fn: any, seed: any) => {
  let pair = fn(seed)
  const result = []

  while (pair && pair.length) {
    result[result.length] = pair[0]
    pair = fn(pair[1])
  }

  return result
}

const fromEntries = (arr: any) =>
  Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })))

export interface GeneratorParams {
  type: string
  name: string
  medium: number | string
  previous: number | Nullable<string>
}

export interface ConfigureSizeScaleOptions {
  round?: boolean
}

export const configureSizeScale = (options: ConfigureSizeScaleOptions = {}) => (
  generator: (params: GeneratorParams) => {}
) => (m: number | string) => {
  const defaultOptions: ConfigureSizeScaleOptions = {
    round: false,
  }

  const { round } = deepmerge<ConfigureSizeScaleOptions>(
    defaultOptions,
    options
  )

  if (isNil(generator)) {
    throw new Error(`No generator specified.`)
  }

  if (!isFunction(generator)) {
    throw new Error(`Generator must be a function.`)
  }

  const s = unfold(
    (v: any) =>
      v.name === 'xxxxs'
        ? false
        : [
            [v.name, v.value],
            {
              name: `x${v.name}`,
              value: generator({
                type: 's',
                name: `x${v.name}`,
                medium: m,
                previous: v.value,
              }),
            },
          ],
    {
      name: 's',
      value: generator({
        type: 's',
        name: 's',
        medium: m,
        previous: m,
      }),
    }
  )

  const l = unfold(
    (v: any) =>
      v.name === 'xxxxl'
        ? false
        : [
            [v.name, v.value],
            {
              name: `x${v.name}`,
              value: generator({
                type: 'l',
                name: `x${v.name}`,
                medium: m,
                previous: v.value,
              }),
            },
          ],
    {
      name: 'l',
      value: generator({
        type: 'l',
        name: 'l',
        medium: m,
        previous: m,
      }),
    }
  )

  const scale = fromEntries(
    s
      .concat([
        [
          'm',
          generator({
            type: 'm',
            name: 'm',
            medium: m,
            previous: undefined,
          }),
        ],
      ])
      .concat(l)
  )

  if (round) {
    return Object.keys(scale).reduce((result: Record<string, unknown>, k) => {
      const u = unit(scale[k])
      result[k] = u.unitless
        ? Math.round(u.value)
        : `${Math.round(u.value)}${u.unit}`
      return result
    }, {})
  }

  return scale
}

export const sizeScale = configureSizeScale()

export const ratio = (small: number, large?: number) => {
  if (isNil(small)) {
    throw new Error('No ratio specified.')
  }

  const s = small
  const l = large ? large : small

  return ({ type, medium, previous }: GeneratorParams): number | string => {
    switch (type) {
      case 's':
        if (!previous) {
          throw new Error(
            'Unexpected missing previous value calculating smaller unit.'
          )
        }

        const sp = unit(previous)
        const su = unit(`${sp.value * (1 / s)}${sp.unit}`)
        return sp.unitless ? su.value : su.css()
      case 'l':
        if (!previous) {
          throw new Error(
            'Unexpected missing previous value calculating larger unit.'
          )
        }

        const lp = unit(previous)
        const lu = unit(`${lp.value * l}${lp.unit}`)
        return lp.unitless ? lu.value : lu.css()
      default:
        const m = unit(medium)
        return m.unitless ? m.value : m.css()
    }
  }
}
