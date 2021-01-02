import { palette } from './palette'

export enum ThemesVariant {
  professional = 'professional',
}

export const themes = new Map<string, Record<string, unknown>>([
  [
    ThemesVariant.professional,
    {
      colors: palette({ id: 1 }),
    },
  ],
])
