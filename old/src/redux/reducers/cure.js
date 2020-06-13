// Cure Reducer

const cureReducerInitialState = {
  percentComplete: 0
}

const cureReducerDevelopmentState = {
  percentComplete: 0
}

let cureState

if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
  cureState = cureReducerDevelopmentState
} else {
  cureState = cureReducerInitialState
}

export default (state = cureState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
