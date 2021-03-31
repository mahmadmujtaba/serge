/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessage from './index'

describe('ChannelMessage component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChannelMessage
          borderColor="#3dd0ffB3"
          title="lorem ipsum do lor sit amet"
          timestamp="2020-09-18T05:41:17.349Z"
          role="CO"
          messageType="Chat"
          hasBeenRead={false}
          privateMessage="Private message"
          isUmpire={true}
          detail={{ content: 'Lorem ipsum do lor sit amet' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})