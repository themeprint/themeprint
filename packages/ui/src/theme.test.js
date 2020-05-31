import { theme } from './theme'
import each from 'jest-each'

describe('theme', () => {
  const expectedColors = [
    'primary',
    'secondary',
    'text',
    'background',
    'muted',
    'highlight',
  ]

  each(expectedColors.map(c => [c])).it(`contains color '%s'`, color => {
    expect(theme.colors[color]).toBeTruthy()
  })

  each(expectedColors.map(c => [c])).it(
    `contains dark mode color '%s'`,
    color => {
      expect(theme.modes.dark[color]).toBeTruthy()
    }
  )

  it('should contain space scale', () => {
    expect(theme.space.length).toEqual(9)
  })

  it('should contain font scale', () => {
    expect(theme.fontSizes.length).toEqual(9)
  })
})
