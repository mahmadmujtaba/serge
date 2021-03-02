import React, { useState } from 'react'

import { Phase } from '@serge/config'
import { Story } from '@storybook/react/types-6-0'
// Import component files
import TurnProgression from './index'
import TurnPropTypes from './types/props'

import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/TurnProgression',
  component: TurnProgression,
  decorators: [wrapper],
  parameters: {
    readme: {
      content: docs
    },
    options: {
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    phase: {
      name: 'Game phase',
      control: {
        type: 'radio',
        defaultValue: Phase.Planning,
        options: [
          Phase.Planning,
          Phase.Adjudication
        ]
      }
    },
  }
}


const Template: Story<TurnPropTypes> = (args) => {
  const [state, setState] = useState({
    phase: Phase.Planning,
    currentTurn: 1
  })
  const updateState = (): void => {
    const newState = {
      phase: state.phase === Phase.Planning ? Phase.Adjudication : Phase.Planning,
      currentTurn: state.phase === Phase.Planning ? state.currentTurn : ++state.currentTurn
    }
    console.log('new state', state, newState)
    setState(newState)
  }
  // @ts-ignore: Add custom property for storybook
  const { viewAs, store, ...props } = args
  return <TurnProgression 
    {...props}
    onNextTurn={updateState}
    currentTurn={state.currentTurn}
    phase={state.phase} />
}

export const WithPhases = Template
WithPhases.args = {
    adjudicationStartTime:"2019-09-30T14:13:22+01:00",
    turnEndTime:"0",
    timeWarning:60000,
    gameDate:"2019-10-01T02:02"
}

