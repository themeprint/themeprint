/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useTheme } from '@themeprint/ui'

export const Component = () => {
  const theme = useTheme()

  return (
    <Box
      __css={{
        color: theme.colors.secondary,
      }}
    >
      Test
    </Box>
  )
}
