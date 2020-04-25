/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@theme-ui/core'
import { ThemeColors } from './ThemeColors'

// TODO: group instead
const toColors = colors => {
  if (!colors) {
    return []
  }

  return Object.keys(colors).map(key => color(key, colors[key]))
}

const color = (name, value) => {
  return {
    name,
    value,
  }
}

export const ThemeViewer = ({ theme, options = {} }) => {
  const { seperator = ':' } = options

  const colors = toColors(theme.colors)

  return (
    <React.Fragment>
      {theme.colors && <ThemeColors seperator={seperator} colors={colors} />}
    </React.Fragment>
  )
}

ThemeViewer.propTypes = {
  theme: PropTypes.object.isRequired,
}
