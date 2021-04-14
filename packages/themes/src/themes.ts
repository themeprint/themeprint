import { color, white } from '@themeprint/colors'
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
      colors: {
        // TODO: palette should return this base set of color properties
        background: white().css(),
        text: color({ h: 210, s: 22, l: 49 }).css(),
        // primary?: CSS.Property.Color | undefined;
        // secondary?: CSS.Property.Color | undefined;
        // accent?: CSS.Property.Color | undefined;
        // highlight?: CSS.Property.Color | undefined;
        // muted?: CSS.Property.Color | undefined;
        ...palette({ id: 1 }),
      },
    },
  ],
])

function createBaseTheme(theme?: Theme): Theme {
  return deepmerge<Theme>({}, theme)
}

export interface CreateThemeOptions {
  variant?: ThemeVariant
}

export function createTheme(options?: CreateThemeOptions): Theme {
  const { variant = ThemeVariant.professional } = options ?? {}
  return createBaseTheme(themes.get(variant))
}
