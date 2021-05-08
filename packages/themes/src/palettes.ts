import { Palette } from './palette'
import { swatch } from './swatch'
import { SwatchColor } from './swatches'

// TODO: colors should contain this base set of color properties
// background: white().css(),
// text: color({ h: 210, s: 22, l: 49 }).css(),
// primary?: CSS.Property.Color | undefined;
// secondary?: CSS.Property.Color | undefined;
// accent?: CSS.Property.Color | undefined;
// highlight?: CSS.Property.Color | undefined;
// muted?: CSS.Property.Color | undefined;

export const palettes: Palette[] = [
  {
    id: '1',
    name: '',
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
    id: '2',
    name: '',
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
    id: '3',
    name: '',
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
    id: '4',
    name: '',
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
    id: '5',
    name: '',
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
    id: '6',
    name: '',
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
    id: '7',
    name: '',
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
    id: '8',
    name: '',
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
    id: '9',
    name: '',
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
    id: '10',
    name: '',
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
    id: '11',
    name: '',
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
    id: '12',
    name: '',
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
    id: '13',
    name: '',
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
    id: '14',
    name: '',
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
    id: '15',
    name: '',
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
    id: '16',
    name: '',
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
    id: '17',
    name: '',
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
    id: '18',
    name: '',
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
    id: '19',
    name: '',
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
    id: '20',
    name: '',
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
    id: '21',
    name: '',
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
    id: '22',
    name: '',
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
    id: '23',
    name: '',
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
    id: '24',
    name: '',
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
