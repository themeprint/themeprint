import { color } from './color'
import { random } from 'faker'

describe('color', () => {
  describe('constructor', () => {
    it('should return a value for percentages', () => {
      expect(color({ h: 0, s: 50, l: 50 })).toMatchObject({
        value: {
          h: 0,
          s: 50,
          l: 50,
        },
      })
    })

    it('should return a value for decimals', () => {
      expect(color({ h: 0, s: 0.5, l: 0.63 })).toMatchObject({
        value: {
          h: 0,
          s: 50,
          l: 63,
        },
      })
    })

    it('should clip low hue', () => {
      expect(color({ h: -1, s: 0.5, l: 0.64 })).toMatchObject({
        value: {
          h: 0,
          s: 50,
          l: 64,
        },
      })
    })

    it('should clip high hue', () => {
      expect(color({ h: 360, s: 0.5, l: 0.64 })).toMatchObject({
        value: {
          h: 359,
          s: 50,
          l: 64,
        },
      })
    })

    it('should clip low saturation', () => {
      expect(color({ h: 0, s: -1, l: 50 })).toMatchObject({
        value: {
          h: 0,
          s: 0,
          l: 50,
        },
      })
    })

    it('should clip high saturation', () => {
      expect(color({ h: 0, s: 101, l: 50 })).toMatchObject({
        value: {
          h: 0,
          s: 100,
          l: 50,
        },
      })
    })

    it('should clip low light', () => {
      expect(color({ h: 0, s: 50, l: -10 })).toMatchObject({
        value: {
          h: 0,
          s: 50,
          l: 0,
        },
      })
    })

    it('should clip high light', () => {
      expect(color({ h: 0, s: 50, l: 110 })).toMatchObject({
        value: {
          h: 0,
          s: 50,
          l: 100,
        },
      })
    })
  })

  describe('css', () => {
    it('should return hsl by default', () => {
      const c = color({ h: 0, s: 0.5, l: 0.63567 })
      expect(c.css()).toEqual('hsl(0,50.27%,63.73%)')
    })

    it('should return hsl when specified', () => {
      const c = color({ h: 0, s: 0.5, l: 0.63567 })
      expect(c.css('hsl')).toEqual('hsl(0,50.27%,63.73%)')
    })

    it('should return hex when specified', () => {
      const c = color({ h: 0, s: 0.5, l: 0.63567 })
      expect(c.css('hex')).toEqual('#d17474')
    })

    it('should return hexa when specified', () => {
      const c = color({ h: 0, s: 0.5, l: 0.63567 })
      expect(c.css('hexa')).toEqual('#d17474ff')
    })

    it('should return rgb when specified', () => {
      const c = color({ h: 0, s: 0.5, l: 0.63567 })
      expect(c.css('rgb')).toEqual('rgb(209,116,116)')
    })

    it('should return rgba when specified', () => {
      const c = color({ h: 0, s: 0.5, l: 0.63567 })
      expect(c.css('rgba')).toEqual('rgba(209,116,116,1)')
    })
  })

  describe('format', () => {
    it('should return HSL string', () => {
      const c = color({ h: 0, s: 60, l: 40 })
      expect(c.format()).toEqual({
        h: 0,
        s: 60,
        l: 40,
      })
    })

    it('should return HSL string for decimals', () => {
      const c = color({ h: 0, s: 0.51345, l: 0.55892 })
      expect(c.format()).toEqual({
        h: 0,
        s: 51,
        l: 56,
      })
    })
  })
})
