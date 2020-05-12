import { unit } from './unit'

describe('unit', () => {
  it('should throw with undefined value', () => {
    expect(() => unit()).toThrow('No value specified.')
  })

  it('should throw with null value', () => {
    expect(() => unit(null)).toThrow('No value specified.')
  })

  it('should throw with boolean value', () => {
    expect(() => unit(false)).toThrow('Expected string or numeric value.')
  })

  it('should throw with object value', () => {
    expect(() => unit({})).toThrow('Expected string or numeric value.')
  })

  it('should throw with array value', () => {
    expect(() => unit([])).toThrow('Expected string or numeric value.')
  })

  it('should return px unit with integer value', () => {
    expect(unit(1)).toEqual({
      unit: 'px',
      value: 1,
    })
  })
})
