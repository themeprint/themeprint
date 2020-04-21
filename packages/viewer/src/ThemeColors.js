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
          width: '30px',
          height: '30px',
          border: '1px solid #ccc',
        }}
      />
      <p>{name}</p>
      <p>
        HSL {hsl.h}, {hsl.s}%, {hsl.l}%
      </p>
    </Box>
  )
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
        <Color key={i} color={c} />
      ))}
    </Box>
  </React.Fragment>
)

// TODO: group instead
const getPalette = colors => {
  if (!colors) {
    return []
  }

  const toValue = (key, name, value) => ({
    key,
    name,
    value: Array.isArray(value) ? value : [value],
  })

  return Object.keys(colors).map(key => toValue(key, key, colors[key]))
}

export const ThemeColors = ({ colors }) => {
  const palette = getPalette(colors)

  return (
    <Box
      css={{
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'auto 1fr',
        gridGap: '1rem',
      }}
    >
      {palette.map(i => (
        <Swatch key={i.key} name={i.name} colors={i.value} />
      ))}
    </Box>
  )
}

ThemeColors.propTypes = {
  colors: PropTypes.object.isRequired,
}
