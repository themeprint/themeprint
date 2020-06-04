/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled, Box } from 'theme-ui'
import { toHsl } from '@themeprint/colors'
import { groupBy } from 'ramda'
import { identifier } from '@themeprint/colors'

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

const Swatch = ({ name, colors }) => {
  const content = (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridColumnGap: '1rem',
      }}
    >
      {colors.map((c, i) => (
        <Color key={i} name={c.name} color={c.value} />
      ))}
    </Box>
  )

  return (
    <React.Fragment>
      <Styled.p css={{ margin: 0 }}>{name}</Styled.p>
      {content}
    </React.Fragment>
  )
}

export const ThemeColors = ({ colors }) => {
  const grouped = groupBy(c => {
    const id = identifier(c.name)

    if (!id) {
      return c
    }

    return id.name
  })(colors)

  return (
    <Box
      css={{
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'auto 1fr',
        gridGap: '1rem',
      }}
    >
      {Object.keys(grouped).map(k => (
        <Swatch key={k} name={k} colors={grouped[k]} />
      ))}
    </Box>
  )
}

ThemeColors.propTypes = {
  colors: PropTypes.array.isRequired,
}

ThemeColors.defaultProps = {
  colors: [],
}
