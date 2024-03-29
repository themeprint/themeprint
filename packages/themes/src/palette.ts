import { palettes } from './palettes'

export interface PaletteOptions {
  id: string
}

export interface PaletteInfo {
  id: string
  name: string
}
export interface Palette extends PaletteInfo {
  colors: Record<string, unknown>
}

export const getPalettes = (): PaletteInfo[] => {
  return palettes.map((p) => ({
    id: p.id,
    name: `Palette ${p.id}`,
  }))
}

export const palette = ({ id }: PaletteOptions): Record<string, unknown> => {
  const pal = palettes.find((p) => p.id === id)

  if (!pal) {
    throw new Error(`Palette with id '${id}' not found.`)
  }

  return pal.colors
}
