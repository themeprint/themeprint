import { colors } from './colors'
import { ColorsVariant } from './palettes'

describe('colors', () => {
  it('should return named keys', () => {
    const result = colors({ name: 'foo', variant: ColorsVariant.cyan1 })
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
