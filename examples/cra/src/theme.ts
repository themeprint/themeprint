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

import { palette, white } from '@themeprint/colors'

export const theme = {
  colors: {
    ...palette({ id: 1 }),
    background: white().css(),
  },
}
