/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeViewer } from './ThemeViewer'
import { color, white, fromScale } from '@themeprint/colors'

const theme = {
  colors: {
    background: white().css(),
    ...fromScale('primary', {
      start: color({ h: 211.3, s: 11.4, l: 60.59 }),
      center: color({ h: 214, s: 12, l: 31.5 }),
      end: color({ h: 218, s: 19, l: 17 }),
    }),
  },
}

export default { title: 'ThemeViewer' }

export const withDefault = () => <ThemeViewer theme={theme} />
