import { CHOOSE_MORALITY, CHANGE_SCREEN } from '../actions/actions'

const initialState = {
  ui: {
    screen: 'chooseMorality'
  },
  player: {
    morality: null,
    name: null
  }
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_MORALITY:
      return {
        ...state,
        player: {
          morality: action.payload.morality
        }
      }
    case CHANGE_SCREEN:
      return {
        ...state,
        ui: {
          screen: action.payload.screen
        }
      }
    default:
      return state
  }
}

export default game
