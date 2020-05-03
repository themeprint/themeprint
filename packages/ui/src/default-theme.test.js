import { defaultTheme } from './default-theme'
import each from 'jest-each'

describe('default theme', () => {
  const expectedColors = [
    'primary',
    'secondary',
    'text',
    'background',
    'muted',
    'highlight',
  ]

  each(expectedColors.map(c => [c])).it(`contains color '%s'`, color => {
    expect(defaultTheme.colors[color]).toBeTruthy()
  })

  each(expectedColors.map(c => [c])).it(
    `contains dark mode color '%s'`,
    color => {
      expect(defaultTheme.modes.dark[color]).toBeTruthy()
    }
  )

  it('should contain space scale', () => {
    expect(defaultTheme.space.length).toEqual(9)
  })

  it('should contain font scale', () => {
    expect(defaultTheme.fontSizes.length).toEqual(9)
  })
})
