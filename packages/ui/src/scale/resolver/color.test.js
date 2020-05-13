import { color } from '../configure'

describe('color', () => {
  it('should throw no theme when no theme provided', () => {
    expect(() => color('primary', 1)()).toThrow('No theme provided.')
  })

  it('should throw no colors property when no colors property on theme', () => {
    expect(() => color('primary', 1)({})).toThrow(
      `No scale found on theme at 'colors.primary-scale'.`
    )
  })

  it('should throw when no parameters sent to color', () => {
    expect(() => color()({})).toThrow(`No color parameters specified.`)
  })

  it('should return expected scale value using index', () => {
    expect(
      color(
        'primary',
        1
      )({
        colors: {
          ['primary-scale']: [0, 1, 2, 3],
        },
      })
    ).toEqual('1px')
  })
})
