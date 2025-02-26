import React from 'react'

/* Import Types */
import PropTypes from './types/props'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import ChannelMessage from '../../molecules/channel-message'
import ForcesInChannel from '../../molecules/forces-in-channel'
import { Box } from '@material-ui/core'
// import collateMessages from './helpers/collate-messages'
import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { MessageChannel, MessageCustom } from '@serge/custom-types'
import { formatTurn } from '@serge/helpers'

/* Render component */
export const ChannelMessagesList: React.FC<PropTypes> = ({ messages, icons, colors, onMarkAllAsRead, onRead, onUnread, isUmpire, turnPresentation }: PropTypes) => {
  return (
    <div>
      <Box mb={2} ml={2} mr={3}>
        <ForcesInChannel messages={messages} colors={colors} icons={icons} onMarkAllAsRead={onMarkAllAsRead} />
      </Box>
      <Box ml={2} className={styles['messages-list']}>
        {
          messages && messages.map((props: MessageChannel, key: number) => {
            if (props.messageType === INFO_MESSAGE_CLIPPED) {
              return (
                <Box mr={2} key={`${props.gameTurn}-turnmarker-${key}`}>
                  <p className={styles['turn-marker']}>Turn {formatTurn(props.gameTurn, turnPresentation)}</p>
                </Box>
              )
            }
            const msg: MessageCustom = props
            return (
              <Box mb={2} mr={2} key={key}>
                <ChannelMessage isUmpire={isUmpire} forceColor={msg.details.from.forceColor}
                  roleName={msg.details.from.roleName} role={msg.details.from.roleId} onRead={onRead} onUnread={onUnread} message={props} />
              </Box>
            )
          })
        }
      </Box>
    </div>
  )
}

export default ChannelMessagesList
