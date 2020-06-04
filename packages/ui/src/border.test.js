import { border } from './border'

describe('border', () => {
  it('throws given undefined', () => {
    expect(() => border()({})).toThrow('No border value specified.')
  })

  it('throws given null', () => {
    expect(() => border(null)({})).toThrow('No border value specified.')
  })

  it('throws given boolean', () => {
    expect(() => border(false)({})).toThrow(
      'Unexpected non string border value.'
    )
  })

  it('throws given object', () => {
    expect(() => border({})({})).toThrow('Unexpected non string border value.')
  })

  it('throws given array', () => {
    expect(() => border([])({})).toThrow('Unexpected non string border value.')
  })

  it('throws given empty string', () => {
    expect(() => border('')({})).toThrow(
      'Border value must have width, style, and color.'
    )
  })

  it('throws given one part string', () => {
    expect(() => border('foo')({})).toThrow(
      'Border value must have width, style, and color.'
    )
  })

  it('throws given two part string', () => {
    expect(() => border('foo bar')({})).toThrow(
      'Border value must have width, style, and color.'
    )
  })

  it('throws given four part string', () => {
    expect(() => border('foo bar baz bez')({})).toThrow(
      'Border value must have width, style, and color.'
    )
  })

  it('returns expected values given empty theme', () => {
    expect(border('1px solid primary')({})).toEqual('1px solid primary')
  })

  it('returns expected values given border width theme', () => {
    expect(
      border('lg solid primary')({
        borderWidths: {
          lg: '20px',
        },
      })
    ).toEqual('20px solid primary')
  })

  it('returns expected values given border style theme', () => {
    expect(
      border('lg foo primary')({
        borderStyles: {
          foo: 'solid',
        },
      })
    ).toEqual('lg solid primary')
  })

  it('returns expected values given color theme', () => {
    expect(
      border('lg foo primary')({
        colors: {
          primary: '#ccc',
        },
      })
    ).toEqual('lg foo #ccc')
  })

  it('returns expected values given full theme', () => {
    expect(
      border('lg foo primary')({
        borderWidths: {
          lg: '20px',
        },
        borderStyles: {
          foo: 'solid',
        },
        colors: {
          primary: '#ccc',
        },
      })
    ).toEqual('20px solid #ccc')
  })

  it('returns expected values given whitespace', () => {
    expect(
      border('  lg   foo    primary  ')({
        borderWidths: {
          lg: '20px',
        },
        borderStyles: {
          foo: 'solid',
        },
        colors: {
          primary: '#ccc',
        },
      })
    ).toEqual('20px solid #ccc')
  })

  it('returns expected values given unitless border width', () => {
    expect(
      border('lg solid #ccc')({
        borderWidths: {
          lg: 20,
        },
      })
    ).toEqual('20px solid #ccc')
  })

  it('returns expected values given non pixel border width', () => {
    expect(
      border('lg solid #ccc')({
        borderWidths: {
          lg: '20rem',
        },
      })
    ).toEqual('20rem solid #ccc')
  })
})
