// World Reducer
import {
  buildLocationsObject,
  calculateWorldPopulations
} from '../../util/world'
import worldMapper from 'world-mapper'

const { Africa, Asia, Australia, Europe, NorthAmerica, SouthAmerica } = worldMapper

const worldReducerInitialState = {
  alivePopulation: 7419500000,
  continents: {
    Africa: {
      coordinates: Africa.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'Africa',
      popuplation: {
        healthyPopulation: 1216000000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    Asia: {
      coordinates: Asia.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'Asia',
      popuplation: {
        healthyPopulation: 4463000000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    Australia: {
      coordinates: Australia.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'Australia',
      popuplation: {
        healthyPopulation: 24600000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    Europe: {
      coordinates: Europe.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'Europe',
      popuplation: {
        healthyPopulation: 714400000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    NorthAmerica: {
      coordinates: NorthAmerica.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'North America',
      popuplation: {
        healthyPopulation: 579000000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    SouthAmerica: {
      coordinates: SouthAmerica.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'South America',
      popuplation: {
        healthyPopulation: 422500000,
        infectedPopulation: 0,
        deadPopulation: 0
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
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'Africa',
      popuplation: {
        healthyPopulation: 1216000000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    Asia: {
      coordinates: Asia.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'Asia',
      popuplation: {
        healthyPopulation: 4463000000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    Australia: {
      coordinates: Australia.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'Australia',
      popuplation: {
        healthyPopulation: 24600000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    Europe: {
      coordinates: Europe.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'Europe',
      popuplation: {
        healthyPopulation: 714400000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    NorthAmerica: {
      coordinates: NorthAmerica.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'North America',
      popuplation: {
        healthyPopulation: 579000000,
        infectedPopulation: 0,
        deadPopulation: 0
      }
    },
    SouthAmerica: {
      coordinates: SouthAmerica.coordinates,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        infectedLocations: []
      },
      name: 'South America',
      popuplation: {
        healthyPopulation: 422500000,
        infectedPopulation: 0,
        deadPopulation: 0
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
    // case 'CALCULATE_POPULATION':
    //   let { continent, newPopulation } = action.payload
    //   const { name } = continent
    //   const { s, i, d } = newPopulation
    //   const newContinentObj = {
    //     ...state[continent],
    //     healthyPopulation: s,
    //     infectedPopulation: i,
    //     deadPopulation: d
    //   }

    //   const newPopulationsObject = calculateWorldPopulations(state.continents)

    //   const newLocationsObject = buildLocationsObject(state.continents[name])

    //   return {
    //     ...state,
    //     continents: {
    //       ...state.continents,
    //       [name]: {
    //         ...state.continents[name],
    //         ...newContinentObj,
    //         locations: {
    //           ...state.continents[name].locations,
    //           ...newLocationsObject
    //         }
    //       }
    //     },
    //     healthyPopulation: newPopulationsObject.healthyPopulation,
    //     infectedPopulation: newPopulationsObject.infectedPopulation,
    //     deadPopulation: newPopulationsObject.deadPopulation
    //   }
    case 'INFECT_POPULATION':
      const { continent, location, numberToInfect } = action.payload
      const { name } = continent
      const newContinentObj = {
        ...state[continent],
        location,
        // TODO: FINISH THIS?!
        // healthyPopulation: state.continents[continent].healthyPopulation - numberToInfect,
        infectedPopulation: numberToInfect
      }

      const newPopulationsObject = calculateWorldPopulations(state.continents)

      const newLocationsObject = buildLocationsObject(state.continents[name])

      return {
        ...state,
        continents: {
          ...state.continents,
          [name]: {
            ...state.continents[name],
            ...newContinentObj
            // locations: {
            //   ...state.continents[name].locations,
            //   ...newLocationsObject
            // }
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
