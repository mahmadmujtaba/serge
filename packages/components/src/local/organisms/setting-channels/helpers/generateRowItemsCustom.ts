import { ForceData, ParticipantCustom } from '@serge/custom-types'
import { EDITABLE_SELECT_ITEM, Item, Option } from '../../../molecules/editable-row'

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextParticipant: ParticipantCustom): Array<Item> => {
  // by default selected force
  let forceSelected: Array<number> = [0]
  // init empty roles array
  let roleOptions: Array<Option> = []

  // additional table cols for RFI participation toggles
  const additionalFields: Item[] = []

  if (nextParticipant.forceUniqid) {
    // get selected force for current row
    const forceIndex = forces.findIndex(force => force.uniqid === nextParticipant.forceUniqid)
    if (forceIndex !== -1) {
      // get all roles for current force and generate options for select
      roleOptions = forces[forceIndex].roles.map((role): Option => ({
        name: role.name,
        uniqid: role.name,
        value: role
      }))
      // selected value value for select
      forceSelected = [forceIndex]
    }
  }

  // get selected roles
  const partRoles: string[] = nextParticipant.roles
  const activeRoles: Array<number> = partRoles ? partRoles.map(role => {
    return roleOptions.findIndex(option => option.value.roleId === role)
  }).filter(active => active !== -1) : []

  let activeTemplates: Array<number> = []

  // get selected templates
  if (nextParticipant.templates && nextParticipant.templates.length) {
    activeTemplates = nextParticipant.templates.map(template => {
      return templatesOptions.findIndex(option => option.uniqid === template._id)
    }).filter(active => active !== -1)
  }

  additionalFields.push({
    active: activeTemplates,
    emptyTitle: 'Chat if empty',
    multiple: true,
    options: templatesOptions,
    uniqid: 'templates',
    type: EDITABLE_SELECT_ITEM
  })

  // return row items
  return [
    {
      active: forceSelected,
      multiple: false,
      options: forces,
      uniqid: 'forces',
      type: EDITABLE_SELECT_ITEM
    },
    {
      active: activeRoles,
      emptyTitle: 'All roles',
      multiple: true,
      options: roleOptions,
      uniqid: 'access',
      type: EDITABLE_SELECT_ITEM
    },
    ...additionalFields
  ]
}
