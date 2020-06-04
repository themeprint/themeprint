import { lint } from './lint'

describe('lint', () => {
  it('should throw given undefined', () => {
    expect(() => lint()).toThrow('No theme specified.')
  })

  it('should throw given null', () => {
    expect(() => lint(null)).toThrow('No theme specified.')
  })

  it('should throw given null', () => {
    expect(() => lint(null)).toThrow('No theme specified.')
  })

  it('should throw given boolean', () => {
    expect(() => lint(false)).toThrow('Invalid theme object.')
  })

  it('should throw given string', () => {
    expect(() => lint('')).toThrow('Invalid theme object.')
  })

  it('should throw given array', () => {
    expect(() => lint([])).toThrow('Invalid theme object.')
  })

  it('should return false is recommended given empty object', () => {
    expect(lint({})).toMatchObject({
      isRecommended: false,
    })
  })

  it('should return colors warning given empty object', () => {
    const { warnings } = lint({})
    expect(warnings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: 'missing-property',
          meta: {
            property: 'colors',
          },
          message: `Add a 'colors' property.`,
        }),
      ])
    )
  })
})
