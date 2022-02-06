import { deepmerge } from '@utilz/deepmerge'
import { palette } from './palette'

export enum ThemeVariant {
  professional = 'professional',
}

const themes = new Map<string, any>([
  [
    ThemeVariant.professional,
    {
      colors: palette({ id: '1' }),
    },
  ],
])

export interface CreateThemeOptions<T> {
  variant?: ThemeVariant
  palette?: string
  theme?: Partial<T>
}

export function createTheme<T extends {}>(options?: CreateThemeOptions<T>): T {
  const {
    variant = ThemeVariant.professional,
    palette: paletteId,
    theme,
  } = options ?? {}
  const themeVariant = themes.get(variant)

  if (!themeVariant) {
    throw new Error(`The theme variant '${variant}' not found.`)
  }

  themeVariant.colors = paletteId
    ? palette({ id: paletteId })
    : themeVariant.colors

  return deepmerge<T>(themeVariant, theme)
}
