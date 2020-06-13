// Log Reducer

const logReducerInitialState = []

const logReducerDevelopmentState = []

let logState

if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
  logState = logReducerDevelopmentState
} else {
  logState = logReducerInitialState
}

export default (state = logState, action) => {
  switch (action.type) {
    case 'ADD_LOG_ITEM':
      const { logItem } = action.payload
      return [...state, logItem]
    default:
      return state
  }
}
