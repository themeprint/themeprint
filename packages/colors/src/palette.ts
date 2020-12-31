import { palettes } from './palettes'

export interface PaletteOptions {
  id: number
}

export const palette = ({ id }: PaletteOptions) => {
  const pal = palettes.find((p) => p.id === id)

  if (!pal) {
    throw new Error(`Palette with id '${id}' not found.`)
  }

  return pal.colors
}
