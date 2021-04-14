import { palette, white } from 'themeprint'

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

export const createTheme = (paletteId: number) => {
  return {
    colors: palette({ id: paletteId }),
  }
}
