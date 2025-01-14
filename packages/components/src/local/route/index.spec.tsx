/* global it expect */
import React from 'react'
import { mount } from 'enzyme'

import Mapping from '../mapping'
import { Phase } from '@serge/config'
import { Route } from './'

import { localMappingConstraints, watuWargame } from '@serge/mocks'
import { RouteStore, Route as RouteType } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Blue', 'role-id', false, platformTypes, false, false)
const route: RouteType = store.routes[0] as RouteType

const clearFromTurn = (turn: number): void => {
  console.log('clear after turn handler', turn)
}

it('Mapping renders correctly with Route', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints = {localMappingConstraints}
    platforms = {platformTypes}
    forces={forces}
    gameTurnTime = {72000}
    wargameInitiated={true}
    playerForce={'Blue'}
    infoMarkers={[]}
    isGameControl = {true}
    phase={Phase.Planning}
    turnNumber={2}
  >
    <Route name={'alpha'} route={route}
      trimmed={false} color={'#f00'} selected={true} clearRouteHandler = { clearFromTurn } />
  </Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
