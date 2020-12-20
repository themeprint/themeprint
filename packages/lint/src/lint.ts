import { isNil, isObject } from '@utilz/types'

export interface WarningMeta {
  property: string
}

export interface Warning {
  type: string
  meta: WarningMeta
  message: string
}

const getWarnings = (theme: Record<string, unknown>) => {
  const expectedProperties = [
    'borders',
    'borderStyles',
    'borderWidths',
    'colors',
    'fonts',
    'fontSizes',
    'fontWeights',
    'letterSpacings',
    'lineHeights',
    'opacities',
    'radii',
    'shadows',
    'sizes',
    'space',
    'zIndices',
  ]

  const warnings: Warning[] = []

  expectedProperties.forEach((p) => {
    if (!theme.hasOwnProperty(p)) {
      warnings.push({
        type: 'missing-property',
        meta: { property: p },
        message: `Add a '${p}' property.`,
      })
    }
  })

  return warnings
}

export const lint = (theme: Record<string, unknown>) => {
  if (isNil(theme)) {
    throw new Error('No theme specified.')
  }

  if (!isObject(theme)) {
    throw new Error('Invalid theme object.')
  }

  const warnings = getWarnings(theme)

  return {
    warnings,
    isRecommended: warnings.length === 0,
  }
}
