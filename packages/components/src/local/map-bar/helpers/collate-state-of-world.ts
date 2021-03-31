import { STATE_OF_WORLD } from '@serge/config'
import { AssetState, ForceState, MessageStateOfWorld, Route, StateOfWorld } from '@serge/custom-types'
import { padInteger } from '@serge/helpers'

const collateStateOfWorld = (routes: Array<Route>, turnNumber: number): MessageStateOfWorld => {
  const forces: Array<ForceState> = []
  routes.forEach((route: Route) => {
    const forceName: string = route.actualForceName
    // retrieve (or create) an object for this force
    let forceArray = forces.find((state: ForceState) => state.name === forceName)
    if (!forceArray) {
      forceArray = { name: forceName, assets: [] }
      forces.push(forceArray)
    }

    // collate element to represent this asset
    const assetState: AssetState = {
      uniqid: route.uniqid,
      name: route.name,
      condition: route.asset.condition,
      perceptions: route.asset.perceptions,
      history: route.history,
      position: route.currentPosition
    }

    if (route.asset.destroyed) {
      assetState.destroyed = route.asset.destroyed
    } else {
      assetState.plannedTurns = route.planned
      assetState.newState = route.currentStatus
    }
    forceArray.assets.push(assetState)
  })

  const res: StateOfWorld = {
    turn: turnNumber + 1,
    name: 'State of World T' + padInteger(turnNumber),
    forces: forces
  }

  const message: MessageStateOfWorld = {
    messageType: STATE_OF_WORLD,
    state: res
  }
  return message
}

export default collateStateOfWorld