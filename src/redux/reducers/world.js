// World Reducer

const worldReducerInitialState = {
  alivePopulation: 450000000,
  deadPopulation: 0,
  healthyPopulation: 450000000,
  infectedPopulation: 0
}

const worldReducerDevelopmentState = {
  alivePopulation: 450000000,
  deadPopulation: 0,
  healthyPopulation: 450000000,
  infectedPopulation: 0
}

let worldState

if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
  worldState = worldReducerDevelopmentState
} else {
  worldState = worldReducerInitialState
}

export default (state = worldState, action) => {
  switch (action.type) {
    case 'INFECT_POPULATION':
      return {
        ...state,
        healthyPopulation: (state.healthyPopulation -=
          action.payload.numberToInfect),
        infectedPopulation: (state.infectedPopulation +=
          action.payload.numberToInfect)
      }
    default:
      return state
  }
}
