import { deepmerge } from '@utilz/deepmerge'
import { useThemeUI } from '@theme-ui/core'
import { createTheme } from './theme'

export const configureUseTheme = (defaultTheme: Record<string, unknown>) => (fallbackTheme: Record<string, unknown>) => {
  const context = useThemeUI()

  if (!context) {
    return deepmerge(defaultTheme, fallbackTheme)
  }

  const { theme } = context
  return deepmerge(defaultTheme, fallbackTheme, theme)
}

export const useTheme = configureUseTheme(createTheme())
