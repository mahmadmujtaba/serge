import { MessageStateOfWorld, ForceData, Asset, ForceState, AssetState, RouteTurn } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'

export default (payload: MessageStateOfWorld, allForces: ForceData[]): ForceData[] => {
  payload.state.forces.forEach((force: ForceState) => {
    force.assets.forEach((entry: AssetState) => {
      const asset: Asset = findAsset(allForces, entry.uniqid)
      if (entry.destroyed) {
        asset.destroyed = entry.destroyed
        asset.plannedTurns = []
      } else {
        asset.plannedTurns = entry.plannedTurns
      }
      const history: RouteTurn[] = asset.history ? asset.history : []
      asset.history = entry.history ? history.concat(entry.history) : history
      asset.status = entry.newState || asset.status
      asset.position = entry.position || asset.position
      asset.condition = entry.condition
      asset.perceptions = entry.perceptions
    })
  })
  return allForces
}
