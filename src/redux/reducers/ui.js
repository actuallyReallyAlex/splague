// UI Reducer

const uiReducerInitialState = {
  background: 'white',
  isLogOpen: true,
  isTransitioning: false,
  screen: 'chooseMorality',
  transitionClasses: 'animated fadeIn slow'
}

const uiReducerDevelopmentState = {
  background: '#252839',
  isLogOpen: true,
  isTransitioning: false,
  screen: 'home',
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
    case 'CLOSE_LOG':
      return {
        ...state,
        isLogOpen: false
      }
    case 'OPEN_LOG':
      return {
        ...state,
        isLogOpen: true
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
