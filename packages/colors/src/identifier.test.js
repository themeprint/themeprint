import { identifier } from './identifier'

describe('identifier', () => {
  it('should throw given undefined', () => {
    expect(identifier()).toEqual(undefined)
  })

  it('should throw given null', () => {
    expect(identifier(null)).toEqual(undefined)
  })

  it('should throw given boolean', () => {
    expect(identifier(false)).toEqual(undefined)
  })

  it('should throw given object', () => {
    expect(identifier({})).toEqual(undefined)
  })

  it('should throw given array', () => {
    expect(identifier([])).toEqual(undefined)
  })

  it('should return empty values for empty string', () => {
    expect(identifier('')).toEqual(undefined)
  })

  it('should return expected values for string', () => {
    expect(identifier('primary500')).toEqual({
      name: 'primary',
      index: 500,
    })
  })

  it('should return expected values for single digit', () => {
    expect(identifier('primary5')).toEqual({
      name: 'primary',
      index: 5,
    })
  })

  it('should return expected string for no digits', () => {
    expect(identifier('primary')).toEqual({
      name: 'primary',
      index: undefined,
    })
  })

  it('should return invalid result for non digits', () => {
    expect(identifier('primary500t')).toEqual(undefined)
  })

  it('should return invalid result for space prefix', () => {
    expect(identifier(' primary500')).toEqual(undefined)
  })
})
