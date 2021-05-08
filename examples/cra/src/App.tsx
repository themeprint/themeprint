// @ts-nocheck
import { Box, Select } from 'theme-ui'
import { ThemeViewer } from '@themeprint/viewer' // TODO: move to @themeview packages
import { useState } from 'react'
import { getPalettes } from 'themeprint'
import { createTheme } from './theme'

export function App() {
  const [id, setId] = useState('1')
  const theme = createTheme({ palette: id })

  return (
    <div
      sx={{
        width: '600px',
        margin: '0 auto',
        marginTop: '20px',
      }}
    >
      <Box sx={{ mb: '20px ' }}>
        <Select value={id} onChange={(e) => setId(e.target.value)}>
          {getPalettes().map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </Select>
      </Box>
      {/* TODO: ThemeViewer should take a Theme type */}
      <ThemeViewer
        theme={{ ...theme, colors: theme.colors as Record<string, unknown> }}
      />
    </div>
  )
}
