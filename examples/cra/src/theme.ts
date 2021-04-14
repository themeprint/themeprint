import { createTheme as baseCreateTheme, white } from 'themeprint'

export const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    background: white().css(),
  },
}

export const createTheme = () => {
  return baseCreateTheme()
}
