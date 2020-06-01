import { splitNumeric } from './string'

describe('splitNumeric', () => {
  it('should throw given undefined', () => {
    expect(() => splitNumeric()).toThrow('No value specified.')
  })

  it('should throw given null', () => {
    expect(() => splitNumeric(null)).toThrow('No value specified.')
  })

  it('should throw given boolean', () => {
    expect(() => splitNumeric(false)).toThrow('Value must be a string.')
  })

  it('should throw given object', () => {
    expect(() => splitNumeric({})).toThrow('Value must be a string.')
  })

  it('should throw given array', () => {
    expect(() => splitNumeric([])).toThrow('Value must be a string.')
  })

  it('should return empty values for empty string', () => {
    expect(splitNumeric('')).toEqual({
      string: undefined,
      number: undefined,
    })
  })

  it('should return expected values for string', () => {
    expect(splitNumeric('primary500')).toEqual({
      string: 'primary',
      number: 500,
    })
  })

  it('should return expected values for single digit', () => {
    expect(splitNumeric('primary5')).toEqual({
      string: 'primary',
      number: 5,
    })
  })

  it('should return expected string for no digits', () => {
    expect(splitNumeric('primary')).toEqual({
      string: 'primary',
      number: undefined,
    })
  })

  it('should return invalid result for non digits', () => {
    expect(splitNumeric('primary500t')).toEqual({
      isValid: false,
      string: 'primary',
      number: '500t',
    })
  })

  it('should return invalid result for space prefix', () => {
    expect(splitNumeric(' primary500')).toEqual({
      isValid: false,
      string: 'primary',
      number: ' 500',
    })
  })
})
