import { Color, toColor } from './color'
import { toNamedScale } from './scale'
import { palettes, ColorsVariant } from './palettes'

export interface ColorsOptions {
  name: string
  variant: ColorsVariant
  format?: (color: Color) => string
}

const defaultFormatter = (color: Color) => color.css()

export const colors = ({
  name,
  variant,
  format = defaultFormatter,
}: ColorsOptions) => {
  const palette = palettes.get(variant)

  if (!palette) {
    throw new Error(`Unknown variant '${variant}'.`)
  }

  const scale = palette.map(toColor)

  return toNamedScale({
    name,
    scale,
    format,
  })
}
