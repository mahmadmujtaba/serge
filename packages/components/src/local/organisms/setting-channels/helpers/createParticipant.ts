import { Participant } from '../types/props'
import { Item, Option } from '../../../molecules/editable-row'
import { ForceData } from '@serge/custom-types'
import defaultParticipant from './defaultParticipant'
import rowToParticipant from './rowToParticipant'

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>): Participant => {
  return {
    ...rowToParticipant(templatesOptions, forces, nextItems, defaultParticipant),
    subscriptionId: Math.random().toString(36).substring(8)
  }
}
