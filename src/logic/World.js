// World Logic

import store from '../redux/store/store'
import {
  increaseDay,
  infectPatientZero,
  infectPopulation,
  setInfectedLocation
} from '../redux/actions/world'
import plagueModeller from 'plague-modeller'
import sample from 'lodash.sample'
import { buildPlaces, getRandomLocation } from '../util'

/**
 * Calculates population differences, and dispatches the action to infect the population.
 * @param {String} continentName Name of Continent to Infect
 */
const calculateInfection = continentName => {
  const state = store.getState()
  const { continents } = state.world
  const { healthyPopulation, infectedPopulation, deadPopulation } = continents[
    continentName
  ]
  const populationChanges = plagueModeller(
    healthyPopulation,
    infectedPopulation,
    deadPopulation
  )
  const { healthy, infected, dead } = populationChanges
  const healthyPopulationDifference = healthyPopulation - healthy
  const infectedPopulationDifference = infected - infectedPopulation
  const deadPopulationDifference = dead - deadPopulation
  // Dispatch Infect Population Action
  store.dispatch(
    infectPopulation(
      continentName,
      healthy,
      healthyPopulationDifference,
      infected,
      infectedPopulationDifference,
      dead,
      deadPopulationDifference
    )
  )
}

/**
 * Calculates if an additional dot is needed. If so, will dispatch the action to create one.
 * @param {String} continentName Name of Continent.
 */
const calculateAdditionalLocations = continentName => {
  const state = store.getState()
  const continentObject = state.world.continents[continentName]
  const { locations, populationPerCoordinate } = continentObject
  const newInfectedPopulation = continentObject.infectedPopulation
  const { infectedLocations } = locations

  // If the number of infected individuals has gotten to the point where
  // a new dot is needed to represent infection size,
  // then assign that new coordinate.
  if (
    (infectedLocations.length + 1) * populationPerCoordinate <=
    newInfectedPopulation
  ) {
    store.dispatch(
      setInfectedLocation(getRandomLocation(continentName), continentName)
    )
    buildPlaces()
  }
}

/**
 * Day Increaser. Interval to increase the day number.
 */
setInterval(() => {
  store.dispatch(increaseDay())
}, 10000)

/**
 * After 10 seconds, will infect Patient Zero, of a random continent.
 */
setTimeout(() => {
  store.dispatch(infectPatientZero())
  const state = store.getState()
  const { patientZeroContinent } = state.world
  // Choose a random dot in that continent to infect
  const infectionLocation = sample(
    state.world.continents[patientZeroContinent].locations.healthyLocations
  )
  store.dispatch(setInfectedLocation(infectionLocation, patientZeroContinent))
  // Rebuild the places
  buildPlaces()
}, 10000)

/**
 * Interval to infect. Doesn't necessarily mean an infection will happen.
 */
setInterval(() => {
  const state = store.getState()
  const { continentNames, day, patientZeroContinent } = state.world
  // Skip the first time, since the interval will run the same time that Patient Zero is being infected
  if (day !== 1) {
    // Random boolean to decide if should infect
    const randomBool = Math.random() >= 0.5
    if (randomBool) {
      if (day < 11) {
        // If the day is less than 11,
        // Keep the infection localized to one continent
        // Calculate population changes
        calculateInfection(patientZeroContinent)
        // Calculate if you should add another location to the infected locations array
        calculateAdditionalLocations(patientZeroContinent)
      } else {
        // It doesn't matter what continent is infected now
        // Calculate population changes
        const randomContinentName = sample(continentNames)
        calculateInfection(randomContinentName)
        // Calculate if you should add another location to the infected locations array
        calculateAdditionalLocations(randomContinentName)
      }
    }
  }
}, 10000)
