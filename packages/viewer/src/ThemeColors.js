/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled, Box } from 'theme-ui'
import { toHsl } from '@themeprint/colors'

const Color = ({ name, color }) => {
  const hsl = toHsl(color).format()
  return (
    <Box>
      <Box
        css={{
          backgroundColor: color,
          width: '90px',
          height: '90px',
          borderRadius: '5px',
          boxShadow: 'rgba(0, 0, 0, 0.06) 0px 0px 0px 1.25px inset',
        }}
      />
      {name && <p>{name}</p>}
      <p>
        HSL {hsl.h}, {hsl.s}%, {hsl.l}%
      </p>
    </Box>
  )
}

const toColorName = (name, index) => {
  const prefix = name.split(':')[0]
  const title = prefix.charAt(0).toUpperCase() + prefix.slice(1)
  return `${title}${(index + 1) * 100}`
}

const Swatch = ({ name, colors }) => (
  <React.Fragment>
    <Styled.p css={{ margin: 0 }}>{name}</Styled.p>
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridColumnGap: '1rem',
      }}
    >
      {colors.map((c, i) => (
        <Color key={i} color={c} name={toColorName(name, i)} />
      ))}
    </Box>
  </React.Fragment>
)

export const ThemeColors = ({ colors }) => (
  <Box
    css={{
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: 'auto 1fr',
      gridGap: '1rem',
    }}
  >
    {colors.map(c => (
      <Swatch key={c.name} name={c.name} colors={c.value} />
    ))}
  </Box>
)

ThemeColors.propTypes = {
  colors: PropTypes.array.isRequired,
}
