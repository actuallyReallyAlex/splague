// UI Reducer

const uiReducerInitialState = {
  background: 'white',
  screen: 'chooseMorality',
  isTransitioning: false,
  transitionClasses: 'animated fadeIn slow'
}

const uiReducerDevelopmentState = {
  background: '#252839',
  screen: 'home',
  isTransitioning: false,
  transitionClasses: 'animated fadeIn'
}

let uiState

if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
  uiState = uiReducerDevelopmentState
} else {
  uiState = uiReducerInitialState
}

export default (state = uiState, action) => {
  switch (action.type) {
    case 'CHANGE_SCREEN':
      return {
        ...state,
        screen: action.payload.screen
      }
    case 'CHANGE_BACKGROUND':
      return {
        ...state,
        background: action.payload.background
      }
    case 'TRANSITION_SCREEN':
      return {
        ...state,
        isTransitioning: action.payload.isTransitioning,
        transitionClasses: action.payload.transitionClasses
      }
    default:
      return state
  }
}
