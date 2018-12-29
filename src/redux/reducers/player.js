// Player Reducer

const playerReducerInitialState = {
  morality: null,
  name: null,
  type: null
}

const playerReducerDevelopmentState = {
  morality: 'evil',
  name: 'Alex',
  type: 'Bubonic'
}

let playerState

if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
  playerState = playerReducerDevelopmentState
} else {
  playerState = playerReducerInitialState
}

export default (state = playerState, action) => {
  switch (action.type) {
    case 'CHOOSE_MORALITY':
      return {
        ...state,
        morality: action.payload.morality
      }
    case 'CHOOSE_NAME':
      return {
        ...state,
        name: action.payload.name
      }
    case 'CHOOSE_TYPE':
      return {
        ...state,
        type: action.payload.type
      }
    default:
      return state
  }
}
