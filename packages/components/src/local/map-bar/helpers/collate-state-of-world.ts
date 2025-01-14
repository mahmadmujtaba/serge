import { STATE_OF_WORLD } from '@serge/config'
import { AssetState, ForceState, MessageStateOfWorld, Route, RouteTurn, Perception, StateOfWorld, MapAnnotations } from '@serge/custom-types'
import { padInteger, deepCopy } from '@serge/helpers'

export const updatePerceptions = (visibleTo: Array<string>, current: Perception[]): Perception[] => {
  // start by removing those not present
  const removeNotPresent = current.filter((perception: Perception) => visibleTo.includes(perception.by))

  // now add any others
  const toBeAdded = visibleTo.filter((by: string) => !removeNotPresent.find((perception: Perception) => perception.by === by))

  // find ones that need to be added
  const newPerceptions: Perception[] = toBeAdded.map((val: string): Perception => ({ by: val }))

  // combine the two
  return removeNotPresent.concat(newPerceptions)
}

const collateStateOfWorld = (routes: Array<Route>, turnNumber: number, annotations: MapAnnotations): MessageStateOfWorld => {
  const forces: Array<ForceState> = []
  routes.forEach((route: Route) => {
    const forceId: string = route.actualForceId
    // retrieve (or create) an object for this force
    let forceArray = forces.find((state: ForceState) => state.uniqid === forceId)
    if (!forceArray) {
      forceArray = { uniqid: forceId, assets: [] }
      forces.push(forceArray)
    }

    // sort out the visible bits
    const newPerceptions = updatePerceptions(route.visibleTo, route.asset.perceptions)

    // collate element to represent this asset
    const assetState: AssetState = {
      uniqid: route.uniqid,
      name: route.name,
      condition: route.condition || route.asset.condition,
      perceptions: newPerceptions,
      history: route.history,
      position: route.currentPosition
    }

    if (route.asset.destroyed) {
      assetState.destroyed = route.asset.destroyed
    } else {
      // remove the first item from planned route
      const planned = deepCopy(route.planned)
      const first: RouteTurn | undefined = planned.shift()
      if (first) {
        if (first.route) {
          // move platform along
          const lastCell = first.route[first.route.length - 1]
          assetState.position = lastCell
        }

        // and history itself
        if (assetState.history) {
          // append it
          assetState.history.push(first)
        } else {
          assetState.history = [first]
        }
        assetState.plannedTurns = planned
        assetState.newState = first.status
      }
    }
    forceArray.assets.push(assetState)
  })

  const res: StateOfWorld = {
    turn: turnNumber + 1,
    name: 'State of World T' + padInteger(turnNumber),
    forces: forces,
    mapAnnotations: annotations
  }

  const message: MessageStateOfWorld = {
    messageType: STATE_OF_WORLD,
    state: res
  }
  return message
}

export default collateStateOfWorld
