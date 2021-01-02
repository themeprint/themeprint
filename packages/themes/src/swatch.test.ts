import { swatch } from './swatch'
import { SwatchColor } from './swatches'

describe('swatch', () => {
  it('should return named keys', () => {
    const result = swatch({ name: 'foo', color: SwatchColor.blue })
    expect(Object.keys(result)).toEqual([
      'foo',
      'foo100',
      'foo200',
      'foo300',
      'foo400',
      'foo500',
      'foo600',
      'foo700',
      'foo800',
      'foo900',
    ])
  })
})
