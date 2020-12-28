/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeViewer } from '@themeprint/viewer'
import { theme } from './theme'

export function App() {
  return (
    <div>
      <p>app</p>
      <ThemeViewer theme={theme} />
    </div>
  )
}
