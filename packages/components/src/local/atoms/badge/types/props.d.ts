import { ChipProps } from '@material-ui/core/Chip'

export type CustomSize = 'large'
export default interface Props extends ChipProps{
  /**
   * Badge custom types
   */
  type?: 'warning' | 'charcoal' | undefined
  /**
   * Badge text capitalization
   */
  allCaps?: boolean
  /**
   * Badge custom sizes
   */
  customSize?: CustomSize
  /**
   * Badge custom background color
   */
  customBackgroundColor?: string
  /**
   * Badge custom color
   */
  customColor?: string
}
