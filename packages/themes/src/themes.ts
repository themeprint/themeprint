import { deepmerge } from '@utilz/deepmerge'
import { Theme } from 'theme-ui'
import { palette } from './palette'

export enum ThemeVariant {
  professional = 'professional',
}

const themes = new Map<string, Partial<Theme>>([
  [
    ThemeVariant.professional,
    {
      colors: palette({ id: '1' }),
    },
  ],
])

export interface CreateThemeOptions {
  variant?: ThemeVariant
  palette?: string
  theme?: Partial<Theme>
}

export function createTheme(options?: CreateThemeOptions): Theme {
  const { variant = ThemeVariant.professional, palette: paletteId, theme } =
    options ?? {}
  const themeVariant = themes.get(variant)

  if (!themeVariant) {
    throw new Error(`The theme variant '${variant}' not found.`)
  }

  themeVariant.colors = paletteId
    ? palette({ id: paletteId })
    : themeVariant.colors

  return deepmerge<Theme>(themeVariant, theme)
}
