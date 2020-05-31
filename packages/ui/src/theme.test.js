import { theme } from './theme'
import { lint } from '@themeprint/lint'

describe('theme', () => {
  it('should be recommended', () => {
    expect(lint(theme).isRecommended).toEqual(true)
  })
})
