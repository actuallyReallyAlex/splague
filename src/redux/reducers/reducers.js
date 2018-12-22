import {
  CHOOSE_MORALITY,
  CHANGE_SCREEN,
  CHOOSE_NAME,
  CHOOSE_TYPE,
  TRANSITION_SCREEN,
  CHANGE_BACKGROUND
} from '../actions/actions'

const initialState = {
  cure: {
    percentComplete: 0
  },
  plague: {
    mutations: 0
  },
  player: {
    morality: null,
    name: null,
    type: null
  },
  ui: {
    background: 'white',
    screen: 'chooseMorality',
    isTransitioning: false
  },
  world: {
    alivePopulation: 450000000,
    deadPopulation: 0,
    infectedPopulation: 0
  }
}

const developmentState = {
  cure: {
    percentComplete: 0
  },
  plague: {
    mutations: 0
  },
  player: {
    morality: 'evil',
    name: 'Alex',
    type: 'Tradesmen'
  },
  ui: {
    background: 'white',
    screen: 'home',
    isTransitioning: false
  },
  world: {
    alivePopulation: 450000000,
    deadPopulation: 0,
    infectedPopulation: 0
  }
}

const game = (state = initialState, action) => {
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
          isTransitioning: action.payload.isTransitioning
        }
      }
    default:
      return state
  }
}

export default game
