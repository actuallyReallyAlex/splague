import { CHOOSE_MORALITY } from '../actions/actions'

const initialState = {
  ui: {
    screen: 'chooseMorality'
  },
  player: {
    morality: null
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
    default:
      return state
  }
}

export default game
