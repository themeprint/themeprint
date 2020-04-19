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
        start: white(),
        center: color({ h: 20, s: 20, l: 20 }),
        end: black(),
      })
    ).toEqual([
      'hsl(0,0%,100%)',
      'hsl(180,100%,87.45%)',
      'hsl(180,100%,75.1%)',
      'hsl(180,100%,62.55%)',
      'hsl(21,19.61%,20%)',
      'hsl(180,100%,37.45%)',
      'hsl(180,100%,25.1%)',
      'hsl(180,100%,12.55%)',
      'hsl(0,0%,0%)',
    ])
  })

  it('should return object when name specified', () => {
    const name = random.word()
    expect(scale({ start: white(), end: black() }, { name })).toEqual({
      [name]: 'hsl(0,0%,50.2%)',
      [`${name}:scale`]: [
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
    const name = random.word()
    expect(
      scale({ start: white(), end: black() }, { name, seperator: '-' })
    ).toEqual({
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
      'hsl(255,45.1%,40%)',
      'hsl(255,45.1%,40%)',
      'hsl(63.91,45.1%,40%)',
      'hsl(144.13,45.1%,40%)',
      'hsl(223.7,45.1%,40%)',
      'hsl(255,45.1%,40%)',
      'hsl(255,45.1%,40%)',
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
