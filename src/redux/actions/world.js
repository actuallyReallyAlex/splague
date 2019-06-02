export const INCREASE_DAY = 'INCREASE_DAY'
export const INFECT_PATIENT_ZERO = 'INFECT_PATIENT_ZERO'
export const INFECT_POPULATION = 'INFECT_POPULATION'
export const SET_PLACES = 'SET_PLACES'
export const SET_INFECTED_LOCATION = 'SET_INFECTED_LOCATION'
export const SET_INFECTION_SPREAD_FROM = 'SET_INFECTION_SPREAD_FROM'

export const increaseDay = () => ({ type: INCREASE_DAY })
export const infectPatientZero = () => ({ type: INFECT_PATIENT_ZERO })
export const infectPopulation = (
  continentName,
  healthyPopulation,
  healthyPopulationDifference,
  infectedPopulation,
  infectedPopulationDifference,
  deadPopulation,
  deadPopulationDifference
) => ({
  type: INFECT_POPULATION,
  payload: {
    continentName,
    healthyPopulation,
    healthyPopulationDifference,
    infectedPopulation,
    infectedPopulationDifference,
    deadPopulation,
    deadPopulationDifference
  }
})
export const setPlaces = places => ({ type: SET_PLACES, payload: { places } })
export const setInfectedLocation = (coordinates, continentName) => ({
  type: SET_INFECTED_LOCATION,
  payload: { coordinates, continentName }
})
export const setInfectionSpreadFrom = (
  infectionSpreadFrom,
  infectionSpreadTo
) => ({
  type: SET_INFECTION_SPREAD_FROM,
  payload: { infectionSpreadFrom, infectionSpreadTo }
})
