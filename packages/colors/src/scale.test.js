import { color, white, black } from './color'
import { scale, rotateHue } from './scale'

const testColor = color({ h: 64, s: 45, l: 40 })

describe('scale', () => {
  it('should return scale in hsl when given range', () => {
    expect(scale({ name: 'color', start: white(), end: black() })).toEqual({
      color: 'hsl(0,0%,50.2%)',
      color100: 'hsl(0,0%,100%)',
      color200: 'hsl(0,0%,87.45%)',
      color300: 'hsl(0,0%,74.9%)',
      color400: 'hsl(0,0%,62.35%)',
      color500: 'hsl(0,0%,50.2%)',
      color600: 'hsl(0,0%,37.65%)',
      color700: 'hsl(0,0%,25.1%)',
      color800: 'hsl(0,0%,12.55%)',
      color900: 'hsl(0,0%,0%)',
    })
  })

  it('should return scale with center value', () => {
    expect(
      scale({
        name: 'color',
        start: color({ h: 211.3, s: 11.4, l: 60.59 }),
        center: color({ h: 214, s: 12, l: 31.5 }),
        end: color({ h: 218, s: 19, l: 17 }),
      })
    ).toEqual({
      color: 'hsl(214.74,11.8%,31.57%)',
      color100: 'hsl(211.3,11.44%,60.59%)',
      color200: 'hsl(212.73,9.24%,53.33%)',
      color300: 'hsl(211.43,8.94%,46.08%)',
      color400: 'hsl(213,10.1%,38.82%)',
      color500: 'hsl(214.74,11.8%,31.57%)',
      color600: 'hsl(214.74,13.29%,28.04%)',
      color700: 'hsl(216.67,14.52%,24.31%)',
      color800: 'hsl(216.67,16.98%,20.78%)',
      color900: 'hsl(218.82,19.54%,17.06%)',
    })
  })

  it('should allow custom formatter', () => {
    expect(
      scale(
        { name: 'color', start: white(), end: black() },
        { format: color => color.css('hex') }
      )
    ).toEqual({
      color: '#808080',
      color100: '#ffffff',
      color200: '#dfdfdf',
      color300: '#bfbfbf',
      color400: '#9f9f9f',
      color500: '#808080',
      color600: '#606060',
      color700: '#404040',
      color800: '#202020',
      color900: '#000000',
    })
  })

  it('should return scale from center color using 80 rotation by default', () => {
    expect(scale({ name: 'color', center: testColor })).toEqual({
      color: 'hsl(63.91,45.1%,40%)',
      color100: 'hsl(144.13,45.1%,40%)',
      color200: 'hsl(223.7,45.1%,40%)',
      color300: 'hsl(303.91,45.1%,40%)',
      color400: 'hsl(24.13,45.1%,40%)',
      color500: 'hsl(63.91,45.1%,40%)',
      color600: 'hsl(144.13,45.1%,40%)',
      color700: 'hsl(223.7,45.1%,40%)',
      color800: 'hsl(303.91,45.1%,40%)',
      color900: 'hsl(24.13,45.1%,40%)',
    })
  })

  it('should allow rotation to be overridden', () => {
    expect(
      scale({ name: 'color', center: testColor }, { generator: rotateHue(20) })
    ).toEqual({
      color: 'hsl(63.91,45.1%,40%)',
      color100: 'hsl(84.13,45.1%,40%)',
      color200: 'hsl(103.7,45.1%,40%)',
      color300: 'hsl(123.91,45.1%,40%)',
      color400: 'hsl(144.13,45.1%,40%)',
      color500: 'hsl(63.91,45.1%,40%)',
      color600: 'hsl(84.13,45.1%,40%)',
      color700: 'hsl(103.7,45.1%,40%)',
      color800: 'hsl(123.91,45.1%,40%)',
      color900: 'hsl(144.13,45.1%,40%)',
    })
  })

  // in future support any colors:
  // scale({ 0: color1, 3: color2, 7: color3 }), this would use colorsFromEdges between each
  // also support overrides after the fact, e.g. scale({ start: .., end: ..}, overrides: { 0: white(), 4: .. })
})
