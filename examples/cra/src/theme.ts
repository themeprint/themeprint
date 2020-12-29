// export const theme = {
//   fonts: {
//     body: 'system-ui, sans-serif',
//     heading: '"Avenir Next", sans-serif',
//     monospace: 'Menlo, monospace',
//   },
//   colors: {
//     text: '#000',
//     background: '#fff',
//     primary: '#33e',
//   },
// }

import { color, white, scale } from '@themeprint/colors'

export const theme = {
  colors: {
    background: white().css(),
    ...scale({
      name: 'primary',
      start: color({ h: 211.3, s: 11.4, l: 60.59 }),
      center: color({ h: 214, s: 12, l: 31.5 }),
      end: color({ h: 218, s: 19, l: 17 }),
    }),
  },
}
