import { createTheme } from './theme'
import { lint } from '@themeprint/lint'

describe('createTheme', () => {
  it('should be recommended theme', () => {
    expect(lint(createTheme()).isRecommended).toEqual(true)
  })
})
