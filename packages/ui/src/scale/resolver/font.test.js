import { font } from '../configure'

describe('font', () => {
  it('should throw no theme when no theme provided', () => {
    expect(() => font(0)()).toThrow('No theme provided.')
  })

  it('should throw no theme when no space property on theme', () => {
    expect(() => font(0)({})).toThrow(`No scale found on theme at 'fontSizes'.`)
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
