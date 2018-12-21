import {
  CHOOSE_MORALITY,
  CHANGE_SCREEN,
  CHOOSE_NAME,
  CHOOSE_TYPE
} from '../actions/actions'

const initialState = {
  ui: {
    screen: 'chooseMorality'
  },
  player: {
    morality: null,
    name: null,
    type: null
  }
}

const developmentState = {
  ui: {
    screen: 'home'
  },
  player: {
    morality: 'good',
    name: 'Alex',
    type: 'Tradesmen'
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
