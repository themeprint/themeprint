import React from 'react'
import { addons, types } from '@storybook/addons'
import { Tool } from './Tool'
export { withThemeUI } from './Decorator'

addons.register('themeprint', api => {
  addons.addPanel('themeprint/panel', {
    type: types.TOOL,
    title: 'Themeprint',
    render: () => <Tool channel={addons.getChannel()} api={api} />,
    match: ({ viewMode }) => viewMode === 'story',
  })
})
