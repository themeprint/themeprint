import { color, white, black } from './color'
import { scale, rotateHue } from './scale'
import { random } from 'faker'

const testColor = color({ h: 64, s: 45, l: 40 })

describe('scale', () => {
  it('should return scale in hsl when given range', () => {
    expect(scale({ start: white(), end: black() })).toEqual([
      'hsl(0,0%,100%)',
      'hsl(0,0%,87.45%)',
      'hsl(0,0%,74.9%)',
      'hsl(0,0%,62.35%)',
      'hsl(0,0%,50.2%)',
      'hsl(0,0%,37.65%)',
      'hsl(0,0%,25.1%)',
      'hsl(0,0%,12.55%)',
      'hsl(0,0%,0%)',
    ])
  })

  it('should return scale with center value', () => {
    expect(
      scale({
        start: color({ h: 211.3, s: 11.4, l: 60.59 }),
        center: color({ h: 214, s: 12, l: 31.5 }),
        end: color({ h: 218, s: 19, l: 17 }),
      })
    ).toEqual([
      'hsl(211.3,11.44%,60.59%)',
      'hsl(212.73,9.24%,53.33%)',
      'hsl(211.43,8.94%,46.08%)',
      'hsl(213,10.1%,38.82%)',
      'hsl(214.74,11.8%,31.57%)',
      'hsl(214.74,13.29%,28.04%)',
      'hsl(216.67,14.52%,24.31%)',
      'hsl(216.67,16.98%,20.78%)',
      'hsl(218.82,19.54%,17.06%)',
    ])
  })

  it('should return object when name specified', () => {
    const name = random.word()
    expect(scale({ start: white(), end: black() }, { name })).toEqual({
      [name]: 'hsl(0,0%,50.2%)',
      [`${name}-scale`]: [
        'hsl(0,0%,100%)',
        'hsl(0,0%,87.45%)',
        'hsl(0,0%,74.9%)',
        'hsl(0,0%,62.35%)',
        'hsl(0,0%,50.2%)',
        'hsl(0,0%,37.65%)',
        'hsl(0,0%,25.1%)',
        'hsl(0,0%,12.55%)',
        'hsl(0,0%,0%)',
      ],
    })
  })

  it('should allow seperator override', () => {
    const name = random.word().replace('_', '')
    expect(
      scale({ start: white(), end: black() }, { name, seperator: '_' })
    ).toEqual({
      [name]: 'hsl(0,0%,50.2%)',
      [`${name}_scale`]: [
        'hsl(0,0%,100%)',
        'hsl(0,0%,87.45%)',
        'hsl(0,0%,74.9%)',
        'hsl(0,0%,62.35%)',
        'hsl(0,0%,50.2%)',
        'hsl(0,0%,37.65%)',
        'hsl(0,0%,25.1%)',
        'hsl(0,0%,12.55%)',
        'hsl(0,0%,0%)',
      ],
    })
  })

  it('should allow custom formatter', () => {
    expect(
      scale(
        { start: white(), end: black() },
        { format: color => color.css('hex') }
      )
    ).toEqual([
      '#ffffff',
      '#dfdfdf',
      '#bfbfbf',
      '#9f9f9f',
      '#808080',
      '#606060',
      '#404040',
      '#202020',
      '#000000',
    ])
  })

  it('should return scale from center color using 80 rotation by default', () => {
    expect(scale(testColor)).toEqual([
      'hsl(144.13,45.1%,40%)',
      'hsl(223.7,45.1%,40%)',
      'hsl(303.91,45.1%,40%)',
      'hsl(24.13,45.1%,40%)',
      'hsl(63.91,45.1%,40%)',
      'hsl(144.13,45.1%,40%)',
      'hsl(223.7,45.1%,40%)',
      'hsl(303.91,45.1%,40%)',
      'hsl(24.13,45.1%,40%)',
    ])
  })

  it('should allow rotation to be overridden', () => {
    expect(scale(testColor, { generator: rotateHue(20) })).toEqual([
      'hsl(84.13,45.1%,40%)',
      'hsl(103.7,45.1%,40%)',
      'hsl(123.91,45.1%,40%)',
      'hsl(144.13,45.1%,40%)',
      'hsl(63.91,45.1%,40%)',
      'hsl(84.13,45.1%,40%)',
      'hsl(103.7,45.1%,40%)',
      'hsl(123.91,45.1%,40%)',
      'hsl(144.13,45.1%,40%)',
    ])
  })

  // in future support any colors:
  // scale({ 0: color1, 3: color2, 7: color3 }), this would use colorsFromEdges between each
  // also support overrides after the fact, e.g. scale({ start: .., end: ..}, overrides: { 0: white(), 4: .. })
})

// have a configure which does:
// configure(defaultOptions) => scale(valueOrRange, options)
// and a fromScale:
// const fromScale = (name, valueOrRange, options) => configure({ name })(valueOrRange, options)
// this allows ...fromScale('primary', blue()) for example
// also add OOTB scales, e.g. ...fromScale('primary', scaleBlue()), this checks if param is array, then
// use that as formatted scale. scaleBlue() returns array of color (object, not formatted string)
