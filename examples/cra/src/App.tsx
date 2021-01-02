/** @jsx jsx */
import { jsx, Box, Select } from 'theme-ui'
import { ThemeViewer } from '@themeprint/viewer'
import { useState } from 'react'
import { getPalettes } from '@themeprint/colors'
import { createTheme } from './theme'

export function App() {
  const [id, setId] = useState(1)
  const theme = createTheme(id)

  return (
    <Box
      sx={{
        width: '900px',
        margin: '0 auto',
        marginTop: '20px',
      }}
    >
      <Select value={id} onChange={(e) => setId(Number(e.target.value))}>
        {getPalettes().map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </Select>
      <ThemeViewer theme={theme} />
    </Box>
  )
}
