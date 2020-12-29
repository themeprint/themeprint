/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { ThemeViewer } from '@themeprint/viewer'
import { theme } from './theme'

export function App() {
  return (
    <Box
      sx={{
        width: '900px',
        margin: '0 auto',
        marginTop: '20px',
      }}
    >
      <ThemeViewer theme={theme} />
    </Box>
  )
}
