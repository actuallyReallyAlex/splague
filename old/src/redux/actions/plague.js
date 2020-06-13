export const INFECT_POPULATION = 'INFECT_POPULATION'
export const SET_PLAGUE_SPEED = 'SET_PLAGUE_SPEED'

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

/**
 * Sets a plague speed interval in ms.
 * @param {Number} plagueSpeed Speed of plague interval in ms.
 */
export const setPlagueSpeed = plagueSpeed => {
  return {
    type: SET_PLAGUE_SPEED,
    payload: {
      plagueSpeed
    }
  }
}
