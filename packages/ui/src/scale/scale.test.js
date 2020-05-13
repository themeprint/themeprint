import { configure, color, space, font, border } from './scale'

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
    it('should throw no theme when no theme provided', () => {
      expect(() => space(0)()).toThrow('No theme provided.')
    })

    it('should throw no theme when no space property on theme', () => {
      expect(() => space(0)({})).toThrow(`No scale found on theme at 'space'.`)
    })

    it('should throw when no parameter provided', () => {
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

  describe('font', () => {
    it('should throw no theme when no theme provided', () => {
      expect(() => font(0)()).toThrow('No theme provided.')
    })

    it('should throw no theme when no space property on theme', () => {
      expect(() => font(0)({})).toThrow(
        `No scale found on theme at 'fontSizes'.`
      )
    })

    it('should throw when no parameter provided', () => {
      expect(() => font()({})).toThrow('No parameters specified.')
    })

    it('should return expected theme value when fontSize index present', () => {
      expect(
        font(1)({
          fontSizes: [0, 10, 20, 30],
        })
      ).toEqual(10)
    })

    it('should return expected theme value when fontSize size present', () => {
      expect(
        font('xs')({
          fontSizes: [0, 10, 20, 30],
        })
      ).toEqual(20)
    })
  })

  describe('border', () => {
    it('should throw no theme when no theme provided', () => {
      expect(() => border('1px solid primary')()).toThrow('No theme provided.')
    })

    it('should throw when no parameter provided', () => {
      expect(() => border()({})).toThrow('No parameters specified.')
    })

    it('should throw when non string paramter provided', () => {
      expect(() => border(false)({})).toThrow(
        'Expected single string parameter.'
      )
    })

    it('should throw when string paramter contains less than 3 parts', () => {
      expect(() => border('1px solid')({})).toThrow(
        'Expected three part string parameter.'
      )
    })

    it('should throw when string paramter contains more than 3 parts', () => {
      expect(() => border('1px solid primary foo')({})).toThrow(
        'Expected three part string parameter.'
      )
    })

    it('should return expected border value when borderWidths index present', () => {
      expect(
        border('2 solid primary')({
          borderWidths: [0, 10, 20, 30],
          colors: {
            primary: '#f00',
          },
        })
      ).toEqual('20px solid #f00')
    })

    it('should throw no borderWidths when index value used', () => {
      expect(() => border('1 solid primary')({})).toThrow(
        `No scale found on theme at 'borderWidths'.`
      )
    })

    it('should return expected border value when unit border width used', () => {
      expect(
        border('2px solid primary')({
          colors: {
            primary: '#f00',
          },
        })
      ).toEqual('2px solid #f00')
    })
  })
})
