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
    morality: null,
    name: null,
    type: null
  },
  ui: {
    background: 'white',
    screen: 'chooseMorality',
    isTransitioning: false,
    transitionClasses: 'animated fadeIn slow'
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
    morality: 'evil',
    name: 'Alex',
    type: 'Bubonic'
  },
  ui: {
    background: '#252839',
    screen: 'home',
    isTransitioning: false,
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
