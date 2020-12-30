import { swatch, SwatchColor } from '@themeprint/colors'

export enum ThemesVariant {
  theme1 = 'theme1',
}

export const themes = new Map<string, Record<string, unknown>>([
  [
    ThemesVariant.theme1,
    {
      colors: {
        ...swatch({ name: 'primary', color: SwatchColor.cyan }),
        ...swatch({ name: 'secondary', color: SwatchColor.indigo }),
        ...swatch({ name: 'tertiary', color: SwatchColor.pink }),
        ...swatch({ name: 'neutral', color: SwatchColor.gray }),
        ...swatch({ name: 'error', color: SwatchColor.red }),
        ...swatch({ name: 'warning', color: SwatchColor.yellow }),
      },
    },
  ],
])
