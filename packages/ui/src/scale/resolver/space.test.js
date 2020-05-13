import { space } from '../configure'

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
