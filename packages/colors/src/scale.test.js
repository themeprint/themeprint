import { color, white, black } from './color'
import { scale } from './scale'

describe('scale', () => {
  it('should return scale from range', () => {
    expect(scale({ start: white(), end: black() }).toEqual(['', '']))
  })

  it('should return scale from center color using 80 rotation by default', () => {
    expect(scale(white())).toEqual(['', '', ''])
  })
})

// {
//   name: '',
//   number: 9
//   value: {
//     index: number => number // takes the scale number and returns an index number, default is middle of scale
//     generator: // object that returns previous and next functions
//       previous: color => color,
//       next: color => color
//   }
// }

// have a configure which does:
// configure(defaultOptions) => scale(valueOrRange, options)
// and a fromScale:
// const fromScale = (name, valueOrRange, options) => configure({ name })(valueOrRange, options)

// 1 2 3 4 5 6 7 8 9
// 0 1 2 3 4
