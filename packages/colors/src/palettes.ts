import { swatch } from './swatch'
import { SwatchColor } from './swatches'

export const palettes = [
  {
    id: 1,
    colors: {
      ...swatch({ name: 'primary', color: SwatchColor.cyan }),
      ...swatch({ name: 'secondary', color: SwatchColor.indigo }),
      ...swatch({ name: 'tertiary', color: SwatchColor.pink }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({ name: 'warning', color: SwatchColor.yellow }),
      ...swatch({ name: 'success', color: SwatchColor.green }),
    },
  },
  {
    id: 2,
    colors: {
      ...swatch({ name: 'primary', color: SwatchColor.blue }),
      ...swatch({ name: 'secondary', color: SwatchColor.cyan }),
      ...swatch({ name: 'tertiary', color: SwatchColor.red }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
        variant: 'vivid',
      }),
    },
  },
  {
    id: 3,
    colors: {
      ...swatch({ name: 'primary', color: SwatchColor.purple }),
      ...swatch({ name: 'secondary', color: SwatchColor.cyan }),
      ...swatch({ name: 'tertiary', color: SwatchColor.red }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
        variant: 'vivid',
      }),
    },
  },
]
