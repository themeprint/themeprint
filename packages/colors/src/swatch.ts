import { Color, toColor } from './color'
import { toNamedScale } from './scale'
import { SwatchColor, swatches } from './swatches'

export interface ColorsOptions {
  name: string
  color: SwatchColor
  variant?: string
  format?: (color: Color) => string
}

const defaultFormatter = (color: Color) => color.css()

export const swatch = ({
  name,
  color,
  variant = 'standard',
  format = defaultFormatter,
}: ColorsOptions) => {
  const swatch = swatches.get(color)

  if (!swatch) {
    throw new Error(`Unknown swatch color '${color}'.`)
  }

  const selectedVariant = swatch.variants.find((v) => v.id === variant)

  if (!selectedVariant) {
    throw new Error(`Unknown swatch variant '${variant}' for color '${color}'.`)
  }

  const scale = selectedVariant.colors.map(toColor)

  return toNamedScale({
    name,
    scale,
    format,
  })
}
