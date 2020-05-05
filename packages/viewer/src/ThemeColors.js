/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled, Box } from 'theme-ui'
import { toHsl, isScaleName, fromScaleName } from '@themeprint/colors'

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

const getColorName = seperator => name => {
  if (isScaleName(seperator)(name)) {
    return fromScaleName(seperator)(name)
  }

  return name
}

const toColorName = (seperator, name, index) => {
  const prefix = getColorName(seperator)(name)
  const title = prefix.charAt(0).toUpperCase() + prefix.slice(1)
  return `${title}${(index + 1) * 100}`
}

const Swatch = ({ seperator = '-', name, colors }) => {
  const content = Array.isArray(colors) ? (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridColumnGap: '1rem',
      }}
    >
      {colors.map((c, i) => (
        <Color key={i} color={c} name={toColorName(seperator, name, i)} />
      ))}
    </Box>
  ) : (
    <Color color={colors} />
  )

  return (
    <React.Fragment>
      <Styled.p css={{ margin: 0 }}>{name}</Styled.p>
      {content}
    </React.Fragment>
  )
}

export const ThemeColors = ({ seperator = '-', colors }) => (
  <Box
    css={{
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: 'auto 1fr',
      gridGap: '1rem',
    }}
  >
    {colors.map(c => (
      <Swatch
        key={c.name}
        seperator={seperator}
        name={c.name}
        colors={c.value}
      />
    ))}
  </Box>
)

ThemeColors.propTypes = {
  colors: PropTypes.array.isRequired,
}
