import React, { useState } from 'react'
import { Box, IconButton, Button } from '@material-ui/core'
import { SendOutlined } from '@material-ui/icons'

import { CUSTOM_MESSAGE } from '@serge/config'

/* Import Types */
import Props from './types/props'
import { MessageCustom } from '@serge/custom-types'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import components */
import { TextInput } from '../../atoms/text-input'

/* Render component */
export const AdminMessageCreator: React.FC<Props> = ({ from, channel, role, postBack }) => {
  const [formState, setFormState] = useState('')

  const timestamp = new Date().toISOString()

  const changeHandler = (e: any): void => setFormState(e.value)
  const submitForm = (): void => {
    const post: MessageCustom = {
      messageType: CUSTOM_MESSAGE,
      details: {
        channel: channel,
        from: {
          force: from.name,
          forceColor: from.color,
          role: role,
          icon: from.icon ? from.icon : ''
        },
        messageType: 'Chat',
        timestamp: timestamp
      },
      message: {
        content: formState
      },
      _id: timestamp,
      hasBeenRead: false,
      isOpen: false
    }
    postBack && postBack(post)
    setFormState('')
  }

  return (
    <Box className={styles['message-creator-wrap']} mt={2} p={2} pb={0}>
      <Box flexGrow={1}>
        <TextInput
          name="Message"
          multiline
          rowsMax={4}
          updateState={changeHandler}
          value={formState}
          fullWidth
        />
      </Box>
      <Box>
        <Button
          className={styles['btn-send']}
          variant="contained"
          color="secondary"
          onClick={submitForm}
          size="small"
        >
          <IconButton component="span" aria-label="Send">
            <SendOutlined fontSize="small" />
          </IconButton>
        </Button>
      </Box>
    </Box>
  )
}

export default AdminMessageCreator