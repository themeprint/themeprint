import { createBreakpoints } from './breakpoints'

describe('createBreakpoints', () => {
  it('should throw on undefined breakpoints', () => {
    expect(() => createBreakpoints()).toThrow('No breakpoints defined.')
  })

  it('should throw on null breakpoints', () => {
    expect(() => createBreakpoints()).toThrow('No breakpoints defined.')
  })

  it.each([[false], [true], [''], [[]]])(
    'should throw given non object value %p',
    value => {
      expect(() => createBreakpoints(value)).toThrow(
        'Unexpected non object breakpoints.'
      )
    }
  )

  it('should return expected breakpoints array', () => {
    const { breakpoints } = createBreakpoints({
      phone: '20em',
      desktop: '60em',
    })

    // jest issue https://github.com/facebook/jest/issues/8475#issuecomment-495729482
    // need to remove non index properties
    expect([...breakpoints]).toEqual(['20em', '60em'])
  })

  it('should return unit breakpoints array when unitless values used', () => {
    const { breakpoints } = createBreakpoints({
      phone: 20,
      desktop: 60,
    })

    // jest issue https://github.com/facebook/jest/issues/8475#issuecomment-495729482
    // need to remove non index properties
    expect([...breakpoints]).toEqual(['20px', '60px'])
  })

  it('should return expected breakpoints named properties', () => {
    const { breakpoints } = createBreakpoints({
      phone: '20em',
    })

    expect(breakpoints.phone).toEqual('20em')
  })

  it('should return expected breakpoints named properties when unitless values used', () => {
    const { breakpoints } = createBreakpoints({
      phone: 20,
    })

    expect(breakpoints.phone).toEqual('20px')
  })

  it('should return expected mediaQuery object', () => {
    const { mediaQuery } = createBreakpoints({
      phone: '20em',
    })

    expect(mediaQuery).toMatchObject({
      min: expect.any(Function),
    })
  })

  describe('mediaQuery', () => {
    it('should return expected media query string', () => {
      const { mediaQuery } = createBreakpoints({
        phone: '20em',
      })

      expect(mediaQuery.min('phone')).toEqual('@media (min-width: 20em)')
    })

    it('should throw on undefined', () => {
      const { mediaQuery } = createBreakpoints({
        phone: '20em',
      })

      expect(() => mediaQuery.min()).toThrow('No breakpoint size specified.')
    })

    it('should throw on invalid size', () => {
      const { mediaQuery } = createBreakpoints({
        phone: '20em',
      })

      expect(() => mediaQuery.min('desktop')).toThrow(
        `No breakpoint size 'desktop' found.`
      )
    })
  })
})
