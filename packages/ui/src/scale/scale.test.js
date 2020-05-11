import { configure } from './scale'

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

    it('color function should return theme color', () => {
      const { color } = configure()
      const func = color('primary', 1)

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
      ).toEqual(1)
    })
  })

  describe('space', () => {
    const { space } = configure()

    it('should throw no theme when no theme provided', () => {
      expect(() => space(0)()).toThrow('No theme provided.')
    })

    it('should throw no theme when no space property on theme', () => {
      expect(() => space(0)({})).toThrow(`No scale found on theme at 'space'.`)
    })

    it('should throw when on parameter provided', () => {
      expect(() => space()({})).toThrow('No parameters specified.')
    })

    it('should return expected theme value when space index present', () => {
      expect(
        space(1)({
          space: [0, 10, 20, 30],
        })
      ).toEqual(10)
    })

    it('should return expected theme value when space size present', () => {
      expect(
        space('xs')({
          space: [0, 10, 20, 30],
        })
      ).toEqual(20)
    })
  })
})
