// World Reducer
import worldMapper from 'world-mapper'
import sample from 'lodash.sample'

const {
  Africa,
  Asia,
  Australia,
  Europe,
  NorthAmerica,
  SouthAmerica
} = worldMapper

const continentNames = [
  'Africa',
  'Asia',
  'Australia',
  'Europe',
  'NorthAmerica',
  'SouthAmerica'
]

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
  continentNames: continentNames,
  day: 0,
  deadPopulation: 0,
  healthyPopulation: 7419500000,
  infectedPopulation: 0,
  patientZeroContinent: null
}

export default (state = worldReducerInitialState, action) => {
  switch (action.type) {
    case 'INCREASE_DAY':
      return Object.assign({}, state, { day: state.day + 1 })
    case 'INFECT_PATIENT_ZERO':
      const randomContinentName = sample(continentNames)
      return Object.assign({}, state, {
        healthyPopulation: state.healthyPopulation - 1,
        infectedPopulation: state.infectedPopulation + 1,
        patientZeroContinent: randomContinentName,
        continents: {
          ...state.continents,
          [randomContinentName]: {
            ...state.continents[randomContinentName],
            healthyPopulation:
              state.continents[randomContinentName].healthyPopulation - 1,
            infectedPopulation:
              state.continents[randomContinentName].infectedPopulation + 1
          }
        }
      })
    case 'INFECT_POPULATION':
      const {
        continentName,
        healthyPopulation,
        healthyPopulationDifference,
        infectedPopulation,
        infectedPopulationDifference,
        deadPopulation,
        deadPopulationDifference
      } = action.payload
      return Object.assign({}, state, {
        healthyPopulation:
          state.healthyPopulation - healthyPopulationDifference,
        infectedPopulation:
          state.infectedPopulation + infectedPopulationDifference,
        deadPopulation: state.deadPopulation + deadPopulationDifference,
        continents: {
          ...state.continents,
          [continentName]: {
            ...state.continents[continentName],
            healthyPopulation,
            infectedPopulation,
            deadPopulation
          }
        }
      })
    default:
      return state
  }
}
