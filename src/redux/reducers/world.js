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
  continents: {
    Africa: {
      coordinates: Africa.coordinates,
      deadPopulation: 0,
      healthyPopulation: 1216000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        healthyLocations: Africa.coordinates,
        infectedLocations: []
      },
      populationPerCoordinate: 6988506
    },
    Asia: {
      coordinates: Asia.coordinates,
      deadPopulation: 0,
      healthyPopulation: 4463000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        healthyLocations: Asia.coordinates,
        infectedLocations: []
      },
      populationPerCoordinate: 9183128
    },
    Australia: {
      coordinates: Australia.coordinates,
      deadPopulation: 0,
      healthyPopulation: 24600000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        healthyLocations: Australia.coordinates,
        infectedLocations: []
      },
      populationPerCoordinate: 482353
    },
    Europe: {
      coordinates: Europe.coordinates,
      deadPopulation: 0,
      healthyPopulation: 714400000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        healthyLocations: Europe.coordinates,
        infectedLocations: []
      },
      populationPerCoordinate: 4961112
    },
    NorthAmerica: {
      coordinates: NorthAmerica.coordinates,
      deadPopulation: 0,
      healthyPopulation: 579000000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        healthyLocations: NorthAmerica.coordinates,
        infectedLocations: []
      },
      populationPerCoordinate: 1511750
    },
    SouthAmerica: {
      coordinates: SouthAmerica.coordinates,
      deadPopulation: 0,
      healthyPopulation: 422500000,
      infectedPopulation: 0,
      infectionMultiplier: 1,
      locations: {
        deadLocations: [],
        healthyLocations: SouthAmerica.coordinates,
        infectedLocations: []
      },
      populationPerCoordinate: 3876147
    }
  },
  continentNames: continentNames,
  day: 0,
  deadPopulation: 0,
  healthyPopulation: 7419500000,
  infectedPopulation: 0,
  patientZeroContinent: null,
  places: [],
  speed: 1000
}

export default (state = worldReducerInitialState, action) => {
  switch (action.type) {
    case 'INCREASE_DAY':
      return Object.assign({}, state, { day: state.day + 1 })
    case 'INFECT_PATIENT_ZERO':
      // Choose a random continent to infect
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
    case 'SET_PLACES':
      return Object.assign({}, state, { places: action.payload.places })
    case 'SET_INFECTED_LOCATION':
      const continentObject = state.continents[action.payload.continentName]
      const { healthyLocations, infectedLocations } = continentObject.locations
      const newHealthyLocationsArray = healthyLocations.filter(
        location => location !== action.payload.coordinates
      )
      const newInfectedLocationsArray = [
        ...infectedLocations,
        action.payload.coordinates
      ]
      return Object.assign({}, state, {
        continents: {
          ...state.continents,
          [action.payload.continentName]: {
            ...state.continents[action.payload.continentName],
            locations: {
              ...state.continents[action.payload.continentName].locations,
              infectedLocations: newInfectedLocationsArray,
              healthyLocations: newHealthyLocationsArray
            }
          }
        }
      })
    default:
      return state
  }
}
