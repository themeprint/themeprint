import { unit } from './unit'

describe('unit', () => {
  it('should throw with undefined value', () => {
    expect(() => unit()).toThrow('No value specified.')
  })

  it('should throw with null value', () => {
    expect(() => unit(null)).toThrow('No value specified.')
  })

  it('should throw with boolean value', () => {
    expect(() => unit(false)).toThrow(`The value 'false' is not a valid unit.`)
  })

  it('should throw with object value', () => {
    expect(() => unit({})).toThrow(`The value '{}' is not a valid unit.`)
  })

  it('should throw with array value', () => {
    expect(() => unit([])).toThrow(`The value '[]' is not a valid unit.`)
  })

  it('should return px unit with integer value', () => {
    expect(unit(0)).toEqual({
      unit: 'px',
      value: 0,
    })
  })

  it('should return px unit for numeric value', () => {
    expect(unit(1.25)).toEqual({
      unit: 'px',
      value: 1.25,
    })
  })

  it('should return px unit for integer with no postfix', () => {
    expect(unit('0')).toEqual({
      unit: 'px',
      value: 0,
    })
  })

  it('should return px unit for numeric value with no postfix', () => {
    expect(unit('0.22')).toEqual({
      unit: 'px',
      value: 0.22,
    })
  })

  it('should return px unit for numeric value with no postfix', () => {
    expect(unit('0.22')).toEqual({
      unit: 'px',
      value: 0.22,
    })
  })

  it('should return px unit for integer with px', () => {
    expect(unit('22px')).toEqual({
      unit: 'px',
      value: 22,
    })
  })

  it('should return px unit for numeric with px', () => {
    expect(unit('22.42px')).toEqual({
      unit: 'px',
      value: 22.42,
    })
  })

  it('should return % unit for string with %', () => {
    expect(unit('22%')).toEqual({
      unit: '%',
      value: 22,
    })
  })

  it('should return ch unit for string with ch', () => {
    expect(unit('22ch')).toEqual({
      unit: 'ch',
      value: 22,
    })
  })

  it('should throw for invalid numeric value', () => {
    expect(() => unit('22..22ch')).toThrow(
      `The value '22..22ch' is not a valid unit.`
    )
  })

  it('should throw for invalid unit', () => {
    expect(() => unit('22pf')).toThrow(`The value '22pf' is not a valid unit.`)
  })

  it('should throw for not leading numeric value', () => {
    expect(() => unit('foo22')).toThrow(
      `The value 'foo22' is not a valid unit.`
    )
  })

  it('should throw for unexpected postfix', () => {
    expect(() => unit('22px foo')).toThrow(
      `The value '22px foo' is not a valid unit.`
    )
  })

  it('should throw for leading space', () => {
    expect(() => unit('  22px')).toThrow(
      `The value '  22px' is not a valid unit.`
    )
  })

  it('should throw for trailing space', () => {
    expect(() => unit('22px  ')).toThrow(
      `The value '22px  ' is not a valid unit.`
    )
  })

  it('should throw for leading and trailing space', () => {
    expect(() => unit('  22px  ')).toThrow(
      `The value '  22px  ' is not a valid unit.`
    )
  })
})
