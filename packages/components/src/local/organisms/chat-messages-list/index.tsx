import React from 'react'
import { Box } from '@material-ui/core'
/* Import Types */
import PropTypes from './types/props'
import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { ChatMessage as ChatMessageType, MessageInfoTypeClipped } from '@serge/custom-types'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Components */
import ChatMessage from '../../molecules/chat-message'
import ForcesInChannel from '../../molecules/forces-in-channel'
/* Render component */
export const ChatMessagesList: React.FC<PropTypes> = ({ messages, icons, colors, isUmpire, playerForce }: PropTypes) => {
  // cast messages, for type-checking
  const cMessages = messages as Array<ChatMessageType | MessageInfoTypeClipped>
  return (
    <div>
      <Box mb={2} ml={2} mr={3}>
        <ForcesInChannel colors={colors} icons={icons} />
      </Box>
      <Box ml={2} className={styles['messages-list']} flexDirection="column" display="flex">
        {
          cMessages && cMessages.map((message, key) => {
            if (message.messageType === INFO_MESSAGE_CLIPPED) {
              return (
                <Box mr={2} key={`${message.gameTurn}-turnmarker-${key}`}>
                  <p className={styles['turn-marker']}>Turn {message.gameTurn}</p>
                </Box>
              )
            } else {
              const chatMsg = message as ChatMessageType
              return (
                <Box mb={2} mr={2} key={key} justifyContent="flex-end" display="block">
                  <Box maxWidth={'60%'} minWidth={'40%'} display="inline-block" style={{ float: chatMsg.details.from.force === playerForce ? 'right' : 'left' }}>
                    <ChatMessage isUmpire={isUmpire} isOwner={chatMsg.details.from.force === playerForce} message={message} />
                  </Box>
                </Box>
              )
            }
          })
        }
      </Box>
    </div>
  )
}

export default ChatMessagesList
