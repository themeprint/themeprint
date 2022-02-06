import { configureSizeScale, sizeScale, ratio } from './size-scale'

describe('sizeScale', () => {
  it('should return expected scale given generator fixed value', () => {
    expect(sizeScale(({ medium }) => medium)(10)).toEqual({
      xxxs: 10,
      xxs: 10,
      xs: 10,
      s: 10,
      m: 10,
      l: 10,
      xl: 10,
      xxl: 10,
      xxxl: 10,
    })
  })

  it('should return expected scale given generator fixed value with unit', () => {
    expect(sizeScale(({ medium }) => medium)('10rem')).toEqual({
      xxxs: '10rem',
      xxs: '10rem',
      xs: '10rem',
      s: '10rem',
      m: '10rem',
      l: '10rem',
      xl: '10rem',
      xxl: '10rem',
      xxxl: '10rem',
    })
  })

  it('should return expected scale given generator ratio single value', () => {
    expect(sizeScale(ratio(2))(10)).toEqual({
      xxxs: 0.625,
      xxs: 1.25,
      xs: 2.5,
      s: 5,
      m: 10,
      l: 20,
      xl: 40,
      xxl: 80,
      xxxl: 160,
    })
  })

  it('should return expected scale given generator ratio s and l values', () => {
    expect(sizeScale(ratio(2, 4))(10)).toEqual({
      xxxs: 0.625,
      xxs: 1.25,
      xs: 2.5,
      s: 5,
      m: 10,
      l: 40,
      xl: 160,
      xxl: 640,
      xxxl: 2560,
    })
  })

  it('should return expected scale given unit medium', () => {
    expect(sizeScale(ratio(2))('10em')).toEqual({
      xxxs: '0.625em',
      xxs: '1.25em',
      xs: '2.5em',
      s: '5em',
      m: '10em',
      l: '20em',
      xl: '40em',
      xxl: '80em',
      xxxl: '160em',
    })
  })

  it('should return expected scale given generator ratio s and l values and round', () => {
    expect(configureSizeScale({ round: true })(ratio(2, 4))(10)).toEqual({
      xxxs: 1,
      xxs: 1,
      xs: 3,
      s: 5,
      m: 10,
      l: 40,
      xl: 160,
      xxl: 640,
      xxxl: 2560,
    })
  })

  it('should return expected scale given unit medium and round', () => {
    expect(configureSizeScale({ round: true })(ratio(2))('10em')).toEqual({
      xxxs: '1em',
      xxs: '1em',
      xs: '3em',
      s: '5em',
      m: '10em',
      l: '20em',
      xl: '40em',
      xxl: '80em',
      xxxl: '160em',
    })
  })
})
