// import { simple } from 'plague-modeller'
import plagueModeller from '../../util/tempPlagueModeller'
export const INFECT_POPULATION = 'INFECT_POPULATION'
export const INCREASE_DAY = 'INCREASE_DAY'
export const SET_DAY_LENGTH = 'SET_DAY_LENGTH'
export const CALCULATE_POPULATION = 'CALCULATE_POPULATION'

export const calculatePopulation = (continent, location, infectionObject) => {
  const { s, i, d } = infectionObject
  return {
    type: CALCULATE_POPULATION,
    payload: {
      continent,
      location,
      newPopulation: plagueModeller(s, i, d)
    }
  }
}

export const increaseDay = () => {
  return {
    type: INCREASE_DAY
  }
}

/**
 * Infects a number of the healthy population.
 * @param {Object} continent Continent object constant.
 * @param {Array} location Location array of coordinates to infect.
 * @param {Number} numberToInfect Number of people to infect.
 */
export const infectPopulation = (continent, location, numberToInfect) => {
  return {
    type: INFECT_POPULATION,
    payload: {
      continent,
      location,
      numberToInfect
    }
  }
}

export const setDayLength = dayLength => {
  return {
    type: SET_DAY_LENGTH,
    payload: {
      dayLength
    }
  }
}
