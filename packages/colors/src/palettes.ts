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
  {
    id: 4,
    colors: {
      ...swatch({ name: 'primary', color: SwatchColor.teal }),
      ...swatch({ name: 'secondary', color: SwatchColor.blue }),
      ...swatch({ name: 'tertiary', color: SwatchColor.purple }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
      }),
    },
  },
  {
    id: 5,
    colors: {
      ...swatch({ name: 'primary', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.blue,
        variant: 'light',
      }),
      ...swatch({ name: 'tertiary', color: SwatchColor.cyan }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.teal,
      }),
    },
  },
  {
    id: 6,
    colors: {
      ...swatch({ name: 'primary', color: SwatchColor.red }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.cyan,
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.green,
        variant: 'lime',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'warm' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
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
    id: 7,
    colors: {
      ...swatch({ name: 'primary', color: SwatchColor.cyan }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.blue,
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'warm' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.teal,
      }),
    },
  },
  {
    id: 8,
    colors: {
      ...swatch({ name: 'primary', color: SwatchColor.blue, variant: 'vivid' }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.cyan,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.orange,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'cool' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
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
    id: 9,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.blue,
        variant: 'light-vivid',
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.pink,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'cool' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.teal,
      }),
    },
  },
  {
    id: 10,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.indigo,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.blue,
        variant: 'light',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'cool' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.teal,
      }),
    },
  },
  {
    id: 11,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.pink,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.purple,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.cyan,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'cool' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
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
    id: 12,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.green,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.purple,
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
      }),
    },
  },
  {
    id: 13,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.blue,
        variant: 'light-vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.teal,
      }),
    },
  },
  {
    id: 14,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.orange,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.green,
        variant: 'lime',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.blue,
        variant: 'light',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
      }),
    },
  },
  {
    id: 15,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.blue,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.teal,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
      }),
    },
  },
  {
    id: 16,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.purple,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.teal,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
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
    id: 17,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.magenta,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.orange,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'blue' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
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
    id: 18,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.purple,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.cyan,
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'warm' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
        variant: 'vivid',
      }),
    },
  },
  {
    id: 19,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.indigo,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.orange,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.magenta,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'cool' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
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
    id: 20,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.blue,
        variant: 'light',
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.purple,
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'cool' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
      }),
    },
  },
  {
    id: 21,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.orange,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.indigo,
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'cool' }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
      }),
    },
  },
  {
    id: 22,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.indigo,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.cyan,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.pink,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray, variant: 'cool' }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
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
    id: 23,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.teal,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.yellow,
        variant: 'vivid',
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.red,
        variant: 'vivid',
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray }),
      ...swatch({ name: 'error', color: SwatchColor.red, variant: 'vivid' }),
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
    id: 24,
    colors: {
      ...swatch({
        name: 'primary',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'secondary',
        color: SwatchColor.blue,
      }),
      ...swatch({
        name: 'tertiary',
        color: SwatchColor.orange,
      }),
      ...swatch({ name: 'neutral', color: SwatchColor.gray }),
      ...swatch({ name: 'error', color: SwatchColor.red }),
      ...swatch({
        name: 'warning',
        color: SwatchColor.yellow,
      }),
      ...swatch({
        name: 'success',
        color: SwatchColor.green,
      }),
    },
  },
]
