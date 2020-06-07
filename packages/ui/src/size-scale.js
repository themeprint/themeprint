import { isNil, isFunction } from '@utilz/types'
import { unit } from './unit'
import { deepmerge } from '@utilz/deepmerge'

const unfold = (fn, seed) => {
  let pair = fn(seed)
  const result = []

  while (pair && pair.length) {
    result[result.length] = pair[0]
    pair = fn(pair[1])
  }

  return result
}

const fromEntries = arr =>
  Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })))

export const sizeScale = generator => m => {
  if (isNil(generator)) {
    throw new Error(`No generator specified.`)
  }

  if (!isFunction(generator)) {
    throw new Error(`Generator must be a function.`)
  }

  const s = unfold(
    v =>
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
    v =>
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

  return fromEntries(
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
}

export const configureRatio = (options = {}) => (small, large) => {
  const defaultOptions = {
    round: false,
  }

  const { round } = deepmerge(defaultOptions, options)

  if (isNil(small)) {
    throw new Error('No ratio specified.')
  }

  const s = small
  const l = large ? large : small

  return ({ type, medium, previous }) => {
    switch (type) {
      case 's':
        const sp = unit(previous)
        const su = unit(`${sp.value * (1 / s)}${sp.unit}`)
        return sp.unitless ? su.value : su.css()
      case 'l':
        const lp = unit(previous)
        const lu = unit(`${lp.value * l}${lp.unit}`)
        return lp.unitless ? lu.value : lu.css()
      default:
        const m = unit(medium)
        return m.unitless ? m.value : m.css()
    }
  }
}

export const ratio = configureRatio()
