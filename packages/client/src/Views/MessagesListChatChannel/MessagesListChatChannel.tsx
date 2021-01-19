import React from 'react'
import { AdminMessage } from '@serge/components'
import { usePlayerUiState } from '../../Store/PlayerUi'
import '@serge/themes/App.scss'
import Props from './types'

const MessagesListChatChannel = ({ messages, markAllAsRead }: Props): React.ReactElement | null => {

  const { selectedForce } = usePlayerUiState()
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  return (<>
    <span className='link link--noIcon link--secondary' onClick={markAllAsRead}>Mark all as read</span>
    {messages.map((message, id) => {
        return (
          <div key={id}>
            <AdminMessage force={selectedForce.name} message={message} />
          </div>
        )
      })
    }
  </>)
}

export default MessagesListChatChannel
