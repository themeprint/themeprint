import { configureUseVariant, useVariant } from './variant'
import { random } from 'faker'

describe('useVariant', () => {
  it('should return variant name appended to default theme key', () => {
    const id = random.word()
    expect(useVariant(id)).toEqual(`components.${id}`)
  })

  it('should return only variant name when no theme key', () => {
    const id = random.word()
    expect(configureUseVariant()(id)).toEqual(id)
  })
})
