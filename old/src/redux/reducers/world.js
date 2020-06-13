// World Reducer

const worldReducerInitialState = {
  alivePopulation: 7419500000,
  continents: {
    Africa: {
      deadPopulation: 0,
      healthyPopulation: 1216000000,
      infectedPopulation: 0
    },
    Asia: {
      deadPopulation: 0,
      healthyPopulation: 4463000000,
      infectedPopulation: 0
    },
    Australia: {
      deadPopulation: 0,
      healthyPopulation: 24600000,
      infectedPopulation: 0
    },
    Europe: {
      deadPopulation: 0,
      healthyPopulation: 714400000,
      infectedPopulation: 0
    },
    NorthAmerica: {
      deadPopulation: 0,
      healthyPopulation: 579000000,
      infectedPopulation: 0
    },
    SouthAmerica: {
      deadPopulation: 0,
      healthyPopulation: 422500000,
      infectedPopulation: 0
    }
  },
  day: 0,
  dayLength: 12000,
  deadPopulation: 0,
  healthyPopulation: 7419500000,
  infectedPopulation: 0
}

const worldReducerDevelopmentState = {
  alivePopulation: 7419500000,
  continents: {
    Africa: {
      deadPopulation: 0,
      healthyPopulation: 1216000000,
      infectedPopulation: 0
    },
    Asia: {
      deadPopulation: 0,
      healthyPopulation: 4463000000,
      infectedPopulation: 0
    },
    Australia: {
      deadPopulation: 0,
      healthyPopulation: 24600000,
      infectedPopulation: 0
    },
    Europe: {
      deadPopulation: 0,
      healthyPopulation: 714400000,
      infectedPopulation: 0
    },
    NorthAmerica: {
      deadPopulation: 0,
      healthyPopulation: 579000000,
      infectedPopulation: 0
    },
    SouthAmerica: {
      deadPopulation: 0,
      healthyPopulation: 422500000,
      infectedPopulation: 0
    }
  },
  day: 0,
  dayLength: 12000,
  deadPopulation: 0,
  healthyPopulation: 7419500000,
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
    case 'INCREASE_DAY':
      return {
        ...state,
        day: state.day + 1
      }
    case 'SET_DAY_LENGTH':
      return {
        ...state,
        dayLength: 12000 / action.payload.dayLength
      }
    default:
      return state
  }
}
