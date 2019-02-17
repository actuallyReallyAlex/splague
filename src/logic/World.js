// World Logic

import store from '../redux/store/store'
import {
  increaseDay,
  infectPatientZero,
  infectPopulation
} from '../redux/actions/world'
import plagueModeller from 'plague-modeller'
import sample from 'lodash.sample'

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

// Day Increaser
setInterval(() => {
  store.dispatch(increaseDay())
}, 10000)

// Infect Patient Zero
setTimeout(() => {
  store.dispatch(infectPatientZero())
}, 10000)

// Infection Interval
setInterval(() => {
  // Skip the first time
  const state = store.getState()
  const { continentNames, day, patientZeroContinent } = state.world
  if (day === 1) {
    return
  } else {
    // Random boolean to decide if should infect
    const randomBool = Math.random() >= 0.5
    if (randomBool) {
      if (day < 11) {
        // Keep the infection localized to one continent
        // Calculate population changes
        calculateInfection(patientZeroContinent)
      } else {
        // It doesn't matter what continent is infected now
        // Calculate population changes
        const randomContinentName = sample(continentNames)
        calculateInfection(randomContinentName)
      }
    }
  }
}, 10000)
