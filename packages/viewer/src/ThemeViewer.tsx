/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@theme-ui/core'
import { ThemeColors } from './ThemeColors'

const toColors = (colors: Record<string, string>) => {
  if (!colors) {
    return []
  }

  return Object.keys(colors).map((key) => color(key, colors[key]))
}

export interface Color {
  name: string
  value: string
}

const color = (name: string, value: string): Color => {
  return {
    name,
    value,
  }
}

export interface Theme {
  colors: Record<string, unknown>
}

export const ThemeViewer = ({ theme }: { theme: Theme }) => {
  const colors = toColors(theme.colors as Record<string, string>) // TODO: review

  return (
    <React.Fragment>
      {theme.colors && <ThemeColors colors={colors} />}
    </React.Fragment>
  )
}

ThemeViewer.propTypes = {
  theme: PropTypes.object.isRequired,
}
