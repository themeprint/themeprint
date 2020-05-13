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
          ['primary-scale']: ['#f00', '#0f0', '#00f', '#fff'],
        },
      })
    ).toEqual('#0f0')
  })

  it('should return expected value with no index', () => {
    expect(
      color('primary')({
        colors: {
          ['primary']: '#f00',
        },
      })
    ).toEqual('#f00')
  })

  // TODO: review, this is default Theme UI behaviour
  // but may be better to throw instead
  it('should return raw value when color does not exist on theme', () => {
    expect(
      color('secondary')({
        colors: {
          ['primary']: '#f00',
        },
      })
    ).toEqual('secondary')
  })
})
