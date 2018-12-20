import { LOL_BUTT } from '../actions/actions'

const initialState = {
  ui: {
    screen: 'chooseMorality'
  }
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case LOL_BUTT:
      return state
    default:
      return state
  }
}

export default game