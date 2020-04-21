/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@theme-ui/core'
import { ThemeColors } from './ThemeColors'

export const ThemeViewer = ({ theme }) => (
  <React.Fragment>
    {theme.colors && <ThemeColors colors={theme.colors} />}
  </React.Fragment>
)

ThemeViewer.propTypes = {
  theme: PropTypes.object.isRequired,
}
