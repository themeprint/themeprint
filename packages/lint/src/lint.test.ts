import { lint } from './lint'

describe('lint', () => {
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
