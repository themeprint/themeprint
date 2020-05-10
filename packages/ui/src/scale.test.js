import { configure, scale } from './scale'

describe('scale functions', () => {
  describe('configure', () => {
    it('should return default scale functions', () => {
      expect(configure()).toEqual({
        color: expect.any(Function),
        space: expect.any(Function),
        font: expect.any(Function),
        border: expect.any(Function),
      })
    })

    // TODO: implement string value support, both 'primary'
    // and 'primary100' to 'primary900' case insensitive
    it('color function should throw not implemented on string value', () => {
      const { color } = configure()
      expect(() => color('primary')()).toThrow('Not implemented.')
    })

    it('color function should return theme color', () => {
      const { color } = configure()
      const func = color(scale('primary', 1))

      const theme = {
        colors: {
          ['primary-scale']: [0, 1, 2, 3, 4, 5],
        },
      }

      expect(func(theme)).toEqual(1)
    })
  })

  describe('color', () => {
    const { color } = configure()

    it('should throw no theme when no theme provided', () => {
      expect(() => color(scale('primary', 1))()).toThrow('No theme provided.')
    })

    it('should throw no colors property when no colors property on theme', () => {
      expect(() => color(scale('primary', 1))({})).toThrow(
        'No theme colors property found.'
      )
    })

    it('should return expected scale value using index', () => {
      expect(
        color(scale('primary', 1))({
          colors: {
            ['primary-scale']: [0, 1, 2, 3],
          },
        })
      ).toEqual(1)
    })
  })

  describe('space', () => {
    const { space } = configure()

    it('should throw no theme when no theme provided', () => {
      expect(() => space(0)()).toThrow('foo')
    })
  })
})
