import {
  CHOOSE_MORALITY,
  CHANGE_SCREEN,
  CHOOSE_NAME,
  CHOOSE_TYPE
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
    screen: 'chooseMorality'
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
    screen: 'home'
  },
  world: {
    alivePopulation: 450000000,
    deadPopulation: 0,
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
    default:
      return state
  }
}

export default game
