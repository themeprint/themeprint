import { configure } from './configure'

describe('configure', () => {
  it('should return default scale functions', () => {
    expect(configure()).toEqual({
      color: expect.any(Function),
      space: expect.any(Function),
      font: expect.any(Function),
      border: expect.any(Function),
    })
  })

  it('color function should return theme color', () => {
    const { color } = configure()
    const func = color('primary', 1)

    const theme = {
      colors: {
        ['primary-scale']: [0, 1, 2, 3, 4, 5],
      },
    }

    expect(func(theme)).toEqual('1px')
  })
})
