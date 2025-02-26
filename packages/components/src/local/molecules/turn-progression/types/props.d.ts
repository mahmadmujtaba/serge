import React from 'react'

export default interface Props {
  adjudicationStartTime: string
  turnEndTime: string
  timeWarning: number
  currentTurn: number
  turnPresentation: TurnFormats
  phase: string
  gameDate: string
  /** is current player acting as game control (with ability to step forward) */
  isGameControl: boolean
  onNextTurn?: React.ReactEventHandler<any>
  /** whether the wragame has been initiated or not */
  wargameInitiated: boolean
}
