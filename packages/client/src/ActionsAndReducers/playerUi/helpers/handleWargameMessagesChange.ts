import {
  MessageChannel,
  PlayerUi,
  ChannelUI,
  MessageCustom,
  MessageInfoType,
  SetWargameMessage
} from '@serge/custom-types'
import { handleChannelUpdates, handleAllInitialChannelMessages, setMessageState, getMessageState, removeMessageState } from '@serge/helpers'
import {
  INFO_MESSAGE_CLIPPED
} from '@serge/config'

/** a new document has been received, either add it to the correct channel,
 * or update the channels to reflect the new channel definitions
 */
export const handleSetLatestWargameMessage = (payload: MessageChannel, newState: PlayerUi): SetWargameMessage => {
  // TODO: only one of `payload` or `newState` will have been received. We should have 
  // two different handlers, one for each change.
  const res: SetWargameMessage = handleChannelUpdates(payload, newState.channels, newState.chatChannel,
    newState.selectedForce, newState.allChannels, newState.selectedRole, newState.isObserver,
    newState.allTemplatesByKey, newState.allForces, newState.playerMessageLog)
  return res
}

/** when the app first opens it processes a list of all existing messages,,
 * grouping them into channels
 */
export const handleSetAllMessages = (payload: Array<MessageCustom | MessageInfoType>, newState: PlayerUi): SetWargameMessage => {
  const res: SetWargameMessage = handleAllInitialChannelMessages(payload, newState.currentWargame, newState.selectedForce,
    newState.selectedRole, newState.allChannels, newState.allForces, newState.chatChannel,
    newState.isObserver, newState.allTemplatesByKey)
  return res
}

const openMessageChange = (message: MessageChannel, id: string): { message: MessageChannel, changed: boolean } => {
  let changed: boolean = false
  if (message._id === id) {
    changed = true
    message.isOpen = true
    message.hasBeenRead = true
  }
  return { message, changed }
}

export const openMessage = (channel: string, payloadMessage: MessageChannel, newState: PlayerUi): ChannelUI => {
  // mutating `messages` array - copyState at top of switch
  const channelMessages: Array<MessageChannel> = (newState.channels[channel].messages || [])
  const selectedForce = newState.selectedForce ? newState.selectedForce.uniqid : ''
  if (payloadMessage._id !== undefined) {
    for (const i in channelMessages) {
      const res = openMessageChange(channelMessages[i], payloadMessage._id)
      if (res.changed) {
        channelMessages[i] = res.message
        setMessageState(newState.currentWargame, selectedForce, newState.selectedRole, payloadMessage._id)
        break
      }
    }
  }

  const unreadMessageCount = channelMessages.filter((message) => {
    return message._id &&
      !message.hasBeenRead &&
      message.messageType !== INFO_MESSAGE_CLIPPED &&
      getMessageState(newState.currentWargame, selectedForce, newState.selectedRole, message._id) === null
  }).length

  return {
    ...newState.channels[channel],
    unreadMessageCount,
    messages: channelMessages
  }
}

const closeMessageChange = (message: MessageChannel, id: string): { message: MessageChannel, changed: boolean } => {
  const changed: boolean = false
  if (message.messageType === INFO_MESSAGE_CLIPPED /* InfoType have no id */ && message._id === id) {
    message.isOpen = false
  }
  return { message, changed }
}

export const markUnread = (channel: string, message: MessageChannel, newState: PlayerUi) => {
  if (!message._id) {
    return {
      ...newState.channels[channel],
      message
    }
  }

  const selectedForce = newState.selectedForce ? newState.selectedForce.uniqid : ''
  removeMessageState(newState.currentWargame, selectedForce, newState.selectedRole, message._id)

  const channelMessages: Array<MessageChannel> = (newState.channels[channel].messages || [])
  const unreadMessageCount = channelMessages.filter((message) => {
    return message._id &&
      !message.hasBeenRead &&
      message.messageType !== INFO_MESSAGE_CLIPPED &&
      getMessageState(newState.currentWargame, selectedForce, newState.selectedRole, message._id) === null
  }).length

  return {
    ...newState.channels[channel],
    unreadMessageCount,
    messages: channelMessages
  }
}

export const closeMessage = (channel: string, payloadMessage: MessageChannel, newState: PlayerUi): (MessageChannel)[] => {
  // mutating messages array - copyState at top of switch
  const channelMessages: Array<MessageChannel> = (newState.channels[channel].messages || [])
  if (payloadMessage._id !== undefined) {
    for (const i in channelMessages) {
      const res = closeMessageChange(channelMessages[i], payloadMessage._id)
      if (res.changed) {
        channelMessages[i] = res.message
        break
      }
    }
  }

  return channelMessages
}

export const markAllMessageState = (channel: string, newState: PlayerUi, msgState: 'read' | 'unread'): ChannelUI => {
  const channelMessages: MessageChannel[] = (newState.channels[channel].messages || []).map((message) => {
    const selectedForce = newState.selectedForce ? newState.selectedForce.uniqid : ''
    if (message._id) {
      message.hasBeenRead = msgState === 'read'
      const msgFnc = msgState === 'read' ? setMessageState : removeMessageState
      msgFnc(newState.currentWargame, selectedForce, newState.selectedRole, message._id)
    }
    return message
  })

  return {
    ...newState.channels[channel],
    unreadMessageCount: msgState === 'read' ? 0 : channelMessages.length,
    messages: channelMessages
  }
}
