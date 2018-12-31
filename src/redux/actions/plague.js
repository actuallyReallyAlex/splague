export const INFECT_POPULATION = 'INFECT_POPULATION'

/**
 * Infects a number of the healthy population.
 * @param {Number} numberToInfect Number of people to infect.
 */
export const infectPopulation = numberToInfect => {
  return {
    type: INFECT_POPULATION,
    payload: {
      numberToInfect
    }
  }
}
