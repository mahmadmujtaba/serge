import { UMPIRE_FORCE } from '@serge/config'
import { ColorOption, ForceData } from '@serge/custom-types'

/** Loops through all available forces and creates an entry for each one to be used as form data
 * @param {any} forces list of forces in wargame
 * @param {boolean} withUnknown whether to include unknown force
 * @param {boolean} excludeUmpire whether to exclude umpire force
 * @return {Array<ColorOption>} collection of name/color pairs
 */
const availableForces = (forces: ForceData[], withUnknown: boolean, excludeUmpire: boolean): Array<ColorOption> => {
  if (forces) {
    const nonUmpire: ForceData[] = excludeUmpire ? forces.filter((force: any) => force.uniqid !== UMPIRE_FORCE) : forces
    const res = nonUmpire.map((force: ForceData) => {
      return {
        colour: force.color,
        name: force.name
      }
    })
    if (withUnknown) {
      res.push({ name: 'Unknown', colour: '#ccc' })
    }
    return res
  } else {
    return []
  }
}

export default availableForces
