// World Reducer
import {
  buildLocationsObject,
  calculateWorldPopulations
} from '../../util/world'
import {
  Africa,
  Asia,
  Australia,
  Europe,
  NorthAmerica,
  SouthAmerica
} from '../../constants'

const worldReducerInitialState = {
  alivePopulation: 7419500000,
  continents: {
    Africa: {
      coordinates: Africa.coordinates,
      deadPopulation: 0,
      healthyPopulation: 1216000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    Asia: {
      coordinates: Asia.coordinates,
      deadPopulation: 0,
      healthyPopulation: 4463000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    Australia: {
      coordinates: Australia.coordinates,
      deadPopulation: 0,
      healthyPopulation: 24600000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    Europe: {
      coordinates: Europe.coordinates,
      deadPopulation: 0,
      healthyPopulation: 714400000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    NorthAmerica: {
      coordinates: NorthAmerica.coordinates,
      deadPopulation: 0,
      healthyPopulation: 579000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    SouthAmerica: {
      coordinates: SouthAmerica.coordinates,
      deadPopulation: 0,
      healthyPopulation: 422500000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
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
      coordinates: Africa.coordinates,
      deadPopulation: 0,
      healthyPopulation: 1216000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    Asia: {
      coordinates: Asia.coordinates,
      deadPopulation: 0,
      healthyPopulation: 4463000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    Australia: {
      coordinates: Australia.coordinates,
      deadPopulation: 0,
      healthyPopulation: 24600000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    Europe: {
      coordinates: Europe.coordinates,
      deadPopulation: 0,
      healthyPopulation: 714400000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    NorthAmerica: {
      coordinates: NorthAmerica.coordinates,
      deadPopulation: 0,
      healthyPopulation: 579000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
    },
    SouthAmerica: {
      coordinates: SouthAmerica.coordinates,
      deadPopulation: 0,
      healthyPopulation: 422500000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      }
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
      const { continent, numberToInfect } = action.payload
      const { name } = continent
      const newContinentObj = {
        ...state[continent],
        healthyPopulation: (state.continents[
          name
        ].healthyPopulation -= numberToInfect),
        infectedPopulation: (state.continents[
          name
        ].infectedPopulation += numberToInfect)
      }

      const newPopulationsObject = calculateWorldPopulations(state.continents)

      const newLocationsObject = buildLocationsObject(state.continents[name])

      return {
        ...state,
        continents: {
          ...state.continents,
          [name]: {
            ...state.continents[name],
            ...newContinentObj,
            locations: {
              ...state.continents[name].locations,
              ...newLocationsObject
            }
          }
        },
        healthyPopulation: newPopulationsObject.healthyPopulation,
        infectedPopulation: newPopulationsObject.infectedPopulation,
        deadPopulation: newPopulationsObject.deadPopulation
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
