import { chain } from 'ramda'
import 'jest-extended'
import { swatches, SwatchColor } from './swatches'

describe('swatches', () => {
  it('should contain nine colors per variant', () => {
    const swatchColors = Object.keys(SwatchColor).map((color) =>
      swatches.get(color)
    )

    const colors = chain((sd) => sd.variants, swatchColors).map((v) => v.colors)
    const lengths = colors.map((c) => c.length)
    expect(lengths).toSatisfyAll((l: number) => l === 9)
  })
})
