import { Confirm } from '@serge/components'
import { RootState } from '@serge/custom-types'
import '@serge/themes/App.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMessage } from '../../ActionsAndReducers/dbMessages/messages_ActionCreators'
import { deleteMessageType } from '../../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setPreviewSchema, setSelectedSchema } from '../../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import { MESSAGE_TEMPLATE_ROUTE } from '../../consts'

const DeleteModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector((state: RootState) => state.currentModal)
  const messages = useSelector((state: RootState) => state.messages)
  const umpireMenu = useSelector((state: RootState) => state.umpireMenu)
  const currentViewURI = useSelector((state: RootState) => state.currentViewURI)

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDeleteMessage = () => {
    if (currentViewURI === MESSAGE_TEMPLATE_ROUTE) {
      dispatch(deleteMessageType(umpireMenu.selectedSchemaID))
      dispatch(setPreviewSchema(''))
      dispatch(setSelectedSchema(''))
    } else {
      dispatch(deleteMessage(messages.messagePreviewId))
    }
    dispatch(modalAction.close())
  }

  if (!currentModal.open) return <></>

  return (
    <Confirm
      isOpen={currentModal.open}
      title='Delete'
      message='This will permanently remove the message. Are you sure?'
      cancelBtnText='Cancel'
      confirmBtnText='Delete'
      onCancel={onHideModal}
      onConfirm={onDeleteMessage}
    />
  )
}

export default DeleteModal
