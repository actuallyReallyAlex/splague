import {
  CHOOSE_MORALITY,
  CHANGE_SCREEN,
  CHOOSE_NAME,
  CHOOSE_TYPE,
  TRANSITION_SCREEN,
  CHANGE_BACKGROUND,
  INFECT_POPULATION,
  ADD_LOG_ITEM
} from '../actions/actions'

const initialState = {
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
    deadPopulation: 0,
    healthyPopulation: 450000000,
    infectedPopulation: 0
  }
}

const developmentState = {
  cure: {
    percentComplete: 0
  },
  log: [],
  plague: {
    mutations: 0,
    speed: 1000
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
    deadPopulation: 0,
    healthyPopulation: 450000000,
    infectedPopulation: 0
  }
}

const game = (state = developmentState, action) => {
  switch (action.type) {
    case CHOOSE_MORALITY:
      return {
        ...state,
        player: {
          ...state.player,
          morality: action.payload.morality
        }
      }
    case CHOOSE_NAME:
      return {
        ...state,
        player: {
          ...state.player,
          name: action.payload.name
        }
      }
    case CHOOSE_TYPE:
      return {
        ...state,
        player: {
          ...state.player,
          type: action.payload.type
        }
      }
    case CHANGE_SCREEN:
      return {
        ...state,
        ui: {
          ...state.ui,
          screen: action.payload.screen
        }
      }
    case CHANGE_BACKGROUND:
      return {
        ...state,
        ui: {
          ...state.ui,
          background: action.payload.background
        }
      }
    case TRANSITION_SCREEN:
      return {
        ...state,
        ui: {
          ...state.ui,
          isTransitioning: action.payload.isTransitioning,
          transitionClasses: action.payload.transitionClasses
        }
      }
    case INFECT_POPULATION:
      return {
        ...state,
        world: {
          ...state.world,
          healthyPopulation: (state.world.healthyPopulation -=
            action.payload.numberToInfect),
          infectedPopulation: (state.world.infectedPopulation +=
            action.payload.numberToInfect)
        }
      }
    case ADD_LOG_ITEM:
      const { log } = state
      const { logItem } = action.payload
      log.push(logItem)
      return {
        ...state,
        log
      }
    default:
      return state
  }
}

export default game
