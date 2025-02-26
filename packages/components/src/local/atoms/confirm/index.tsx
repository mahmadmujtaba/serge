import React from 'react'
import { CustomDialog } from '../custom-dialog'
import { Props } from './types/props'

/* Render component */
export const Confirm: React.FC<Props> = ({ isOpen, title, message, onCancel, onConfirm, cancelBtnText, confirmBtnText }: Props) => {
  return (
    <CustomDialog
      isOpen={isOpen}
      header={title || 'Confirm'}
      cancelBtnText={cancelBtnText || 'No'}
      saveBtnText={confirmBtnText || 'Yes'}
      onClose={onCancel}
      content={message}
      onSave={onConfirm}
    />
  )
}

export default Confirm
