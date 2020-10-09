export const platformTypes = [
  {
    name: 'Fishing vessel',
    conditions: [
      'Full capability',
      'Limited capability',
      'Illegally boarded',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'fishing-vessel.svg',
    speedKts: [
      10,
      20
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Fishing',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea'
  },
  {
    name: 'Frigate',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'frigate.svg',
    speedKts: [
      10,
      20,
      30
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea'
  },
  {
    name: 'Boghammer',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'boghammer.svg',
    speedKts: [
      10,
      20,
      30,
      40
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea'
  },
  {
    name: 'torpedo',
    conditions: [
      'Full capability',
      'Limited capability',
      'Destroyed'
    ],
    icon: 'torpedo.svg',
    speedKts: [
      10
    ],
    states: [
      {
        name: 'Onboard',
        mobile: false
      },
      {
        name: 'Deploy',
        mobile: true,
        deploying: true
      },
      {
        name: 'Transiting',
        mobile: true
      }
    ],
    travelMode: 'sea'
  },
  {
    name: 'Fast attack craft',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'fast-attack-craft.svg',
    speedKts: [
      10,
      20,
      30,
      40,
      50
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea'
  },
  {
    name: 'MCMV',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'mcmv.svg',
    speedKts: [
      10
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea'
  },
  {
    name: 'Helicopter',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Destroyed'
    ],
    icon: 'helicopter.svg',
    speedKts: [],
    states: [
      {
        name: 'Airborne',
        mobile: true
      },
      {
        name: 'Landed',
        mobile: false
      },
      {
        name: 'Preparing for launch',
        mobile: false
      }
    ],
    travelMode: 'air'
  },
  {
    name: 'Fixed wing aircraft',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Destroyed'
    ],
    icon: 'fixed-wing-aircraft.svg',
    speedKts: [],
    states: [
      {
        name: 'Airborne',
        mobile: true
      },
      {
        name: 'Landed',
        mobile: false
      },
      {
        name: 'Preparing for launch',
        mobile: false
      }
    ],
    travelMode: 'air'
  },
  {
    name: 'Unmanned Airborne Vehicle',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Destroyed'
    ],
    icon: 'uas.svg',
    speedKts: [],
    states: [
      {
        name: 'Airborne',
        mobile: true
      },
      {
        name: 'Landed',
        mobile: false
      },
      {
        name: 'Preparing for launch',
        mobile: false
      }
    ],
    travelMode: 'air'
  },
  {
    name: 'Task Group',
    conditions: [
      'Full capability',
      'Limited capability',
      'Immobile',
      'Destroyed'
    ],
    icon: 'uas.svg',
    speedKts: [
      10,
      20
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea'
  },
  {
    name: 'Coastal radar site',
    conditions: [
      'Full capability',
      'Limited capability',
      'Destroyed'
    ],
    icon: 'coastal-radar-site.svg',
    speedKts: [
    ],
    states: [
      {
        name: 'Inactive',
        mobile: false
      },
      {
        name: 'Active',
        mobile: false
      },
      {
        name: 'Engaging',
        mobile: false
      }
    ],
    travelMode: 'land'
  },
  {
    name: 'Merchant vessel',
    conditions: [
      'Full capability',
      'Limited capability',
      'Illegally boarded',
      'Immobile',
      'Sinking',
      'Destroyed'
    ],
    icon: 'merchant-vessel.svg',
    speedKts: [
      10,
      20
    ],
    states: [
      {
        name: 'Transiting',
        mobile: true
      },
      {
        name: 'Stopped',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      }
    ],
    travelMode: 'sea'
  }
]

export default platformTypes
