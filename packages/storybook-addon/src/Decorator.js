import React from 'react'
import { addons, makeDecorator } from '@storybook/addons'
import { ThemeprintContext } from '@themeprint/part'

const Decorator = ({ story, options }) => {
  const [enabled, setEnabled] = React.useState(false)
  const [currentStory] = React.useState(story)
  const [channel] = React.useState(addons.getChannel())

  React.useEffect(() => {
    const handleEnabledChange = enabled => {
      setEnabled(enabled)
    }

    channel.on('themeprint/change-enabled', handleEnabledChange)

    return () => {
      channel.removeListener('themeprint/change-enabled', handleEnabledChange)
    }
  }, [])

  return (
    <ThemeprintContext.Provider value={{ enabled }}>
      {currentStory}
    </ThemeprintContext.Provider>
  )
}

export const withThemeUI = makeDecorator({
  name: 'withThemeUI',
  parameterName: 'themeprint',
  wrapper: (getStory, context, { options }) => {
    return <Decorator story={getStory(context)} options={options} />
  },
})
