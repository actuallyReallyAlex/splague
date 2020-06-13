export const initialState = {
  cure: {
    percentComplete: 0
  },
  log: [],
  plague: {
    mutations: 0,
    speed: 1000
  },
  player: {
    mode: null,
    name: null,
    type: null
  },
  ui: {
    background: 'white',
    isLogOpen: true,
    isTransitioning: false,
    screen: 'chooseMode',
    transitionClasses: 'animated fadeIn slow'
  },
  world: {
    alivePopulation: 7419500000,
    continents: {
      Africa: {
        deadPopulation: 0,
        healthyPopulation: 1216000000,
        infectedPopulation: 0
      },
      Asia: {
        deadPopulation: 0,
        healthyPopulation: 4463000000,
        infectedPopulation: 0
      },
      Australia: {
        deadPopulation: 0,
        healthyPopulation: 24600000,
        infectedPopulation: 0
      },
      Europe: {
        deadPopulation: 0,
        healthyPopulation: 714400000,
        infectedPopulation: 0
      },
      NorthAmerica: {
        deadPopulation: 0,
        healthyPopulation: 579000000,
        infectedPopulation: 0
      },
      SouthAmerica: {
        deadPopulation: 0,
        healthyPopulation: 422500000,
        infectedPopulation: 0
      }
    },
    day: 0,
    dayLength: 12000,
    deadPopulation: 0,
    healthyPopulation: 7419500000,
    infectedPopulation: 0
  }
}

export const developmentState = {
  cure: {
    percentComplete: 50
  },
  log: [{ title: 'Test Title', description: 'Test description.' }],
  plague: {
    mutations: 1,
    speed: 500
  },
  player: {
    mode: 'evil',
    name: 'Alex',
    type: 'Bubonic'
  },
  ui: {
    background: '#252839',
    isLogOpen: true,
    isTransitioning: false,
    screen: 'home',
    transitionClasses: 'animated fadeIn'
  },
  world: {
    alivePopulation: 450000000,
    day: 0,
    dayLength: 12000,
    deadPopulation: 0,
    healthyPopulation: 450000000,
    infectedPopulation: 0
  }
}
