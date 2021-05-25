import SelectedAsset from '@serge/custom-types/selected-asset'

const selected: SelectedAsset = {
  uniqid: 'id001',
  name: 'asset-name',
  contactId: 'C345',
  type: 'Frigate',
  force: 'Blue',
  controlledBy: [],
  condition: 'Full capability',
  visibleTo: ['red', 'blue'],
  status: {
    speedKts: 10,
    state: 'Transiting'
  }
}

export default selected