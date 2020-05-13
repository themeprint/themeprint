import { border } from '../configure'

describe('border', () => {
  it('should throw no theme when no theme provided', () => {
    expect(() => border('1px solid primary')()).toThrow('No theme provided.')
  })

  it('should throw when no parameter provided', () => {
    expect(() => border()({})).toThrow('No parameters specified.')
  })

  it('should throw when non string paramter provided', () => {
    expect(() => border(false)({})).toThrow('Expected single string parameter.')
  })

  it('should throw when string paramter contains less than 3 parts', () => {
    expect(() => border('1px solid')({})).toThrow(
      'Expected three part string parameter.'
    )
  })

  it('should throw when string paramter contains more than 3 parts', () => {
    expect(() => border('1px solid primary foo')({})).toThrow(
      'Expected three part string parameter.'
    )
  })

  it('should return expected border value when borderWidths index present', () => {
    expect(
      border('2 solid primary')({
        borderWidths: [0, 10, 20, 30],
        colors: {
          primary: '#f00',
        },
      })
    ).toEqual('20px solid #f00')
  })

  it('should throw no borderWidths when index value used', () => {
    expect(() => border('1 solid primary')({})).toThrow(
      `No scale found on theme at 'borderWidths'.`
    )
  })

  it('should return expected border value when unit border width used', () => {
    expect(
      border('2px solid primary')({
        colors: {
          primary: '#f00',
        },
      })
    ).toEqual('2px solid #f00')
  })
})
