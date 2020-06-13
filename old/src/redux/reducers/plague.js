// Plague Reducer

const plagueReducerInitialState = {
  mutations: 0,
  speed: 1000
}

const plagueReducerDevelopmentState = {
  mutations: 0,
  speed: 1000
}

let plagueState

if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
  plagueState = plagueReducerDevelopmentState
} else {
  plagueState = plagueReducerInitialState
}

export default (state = plagueState, action) => {
  switch (action.type) {
    case 'SET_PLAGUE_SPEED':
      return {
        ...state,
        speed: action.payload.plagueSpeed
      }
    default:
      return state
  }
}
