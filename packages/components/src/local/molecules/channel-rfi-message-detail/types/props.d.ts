import { MessageCustom, ForceRole } from '@serge/custom-types'
export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  message: MessageCustom
  /** role of logged in player */
  role: ForceRole
  /** if this player is from the UMPIRE force */
  isUmpire: boolean
  /** if this player has "RFI Manager" attribute in their role */
  isRFIManager: boolean
  /** trigger on collapse */
  onRead?: () => void
  /** if message status readed */
  isReaded?: boolean
}