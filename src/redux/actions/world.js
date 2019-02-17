export const INCREASE_DAY = 'INCREASE_DAY'
export const INFECT_PATIENT_ZERO = 'INFECT_PATIENT_ZERO'
export const INFECT_POPULATION = 'INFECT_POPULATION'

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
