import React from 'react'

// Import component files
import CollapsibleContent from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/helper-elements/collapsible/CollapsibleContent',
  component: CollapsibleContent,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onClick = (): void => {
  console.log('clicked')
}

export const Default: React.FC = () => (
  <CollapsibleContent collapsed={false} onClick={onClick}>Content</CollapsibleContent>
)

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
