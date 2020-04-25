import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeprintContext } from '../src/context'

addDecorator(storyFn => (
  <ThemeprintContext.Provider value={{ enabled: true }}>
    {storyFn()}
  </ThemeprintContext.Provider>
))
