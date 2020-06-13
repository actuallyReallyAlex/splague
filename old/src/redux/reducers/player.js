// Player Reducer

const playerReducerInitialState = {
  mode: null,
  name: null,
  type: null
}

const playerReducerDevelopmentState = {
  mode: 'evil',
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
    case 'CHOOSE_MODE':
      return {
        ...state,
        mode: action.payload.mode
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
