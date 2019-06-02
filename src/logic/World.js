// World Logic

import store from '../redux/store/store'
import {
  increaseDay,
  infectPatientZero,
  infectPopulation,
  setInfectedLocation,
  setInfectionSpreadFrom
} from '../redux/actions/world'
import plagueModeller from 'plague-modeller'
import sample from 'lodash.sample'
import { buildPlaces, getRandomLocation } from '../util'

const { speed } = store.getState().world

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
    (populationPerCoordinate * (infectedLocations.length + 1)) /
      newInfectedPopulation <
    infectedLocations.length
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
const dayIncreaser = setInterval(() => {
  store.dispatch(increaseDay())
}, speed)

/**
 * After 10 seconds, will infect Patient Zero, of a random continent.
 */
const patientZeroTimeout = setTimeout(() => {
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
}, speed)

// Intervals for Each Continent
const AfricaInfectionInterval = setInterval(() => {
  const state = store.getState()
  const { isInfectionIntervalRunning } = state.world.continents.Africa

  if (isInfectionIntervalRunning) {
    calculateInfection('Africa')
    calculateAdditionalLocations('Africa')
  }
}, speed)

const AsiaInfectionInterval = setInterval(() => {
  const state = store.getState()
  const { isInfectionIntervalRunning } = state.world.continents.Asia

  if (isInfectionIntervalRunning) {
    calculateInfection('Asia')
    calculateAdditionalLocations('Asia')
  }
}, speed)

const AustraliaInfectionInterval = setInterval(() => {
  const state = store.getState()
  const { isInfectionIntervalRunning } = state.world.continents.Australia

  if (isInfectionIntervalRunning) {
    calculateInfection('Australia')
    calculateAdditionalLocations('Australia')
  }
}, speed)

const EuropeInfectionInterval = setInterval(() => {
  const state = store.getState()
  const { isInfectionIntervalRunning } = state.world.continents.Europe

  if (isInfectionIntervalRunning) {
    calculateInfection('Europe')
    calculateAdditionalLocations('Europe')
  }
}, speed)

const NorthAmericaInfectionInterval = setInterval(() => {
  const state = store.getState()
  const { isInfectionIntervalRunning } = state.world.continents.NorthAmerica

  if (isInfectionIntervalRunning) {
    calculateInfection('NorthAmerica')
    calculateAdditionalLocations('NorthAmerica')
  }
}, speed)

const SouthAmericaInfectionInterval = setInterval(() => {
  const state = store.getState()
  const { isInfectionIntervalRunning } = state.world.continents.SouthAmerica

  if (isInfectionIntervalRunning) {
    calculateInfection('SouthAmerica')
    calculateAdditionalLocations('SouthAmerica')
  }
}, speed)

// Decides if the infection should spread to another continent
const shouldInfectionSpreadDecider = setInterval(() => {
  const state = store.getState()
  const { continents, continentNames } = state.world

  // Array of continents that have an infection occuring
  const infectedContinents = []
  // Push the name of any infected continents to the array
  continentNames.forEach(continentName => {
    const { infectedPopulation } = continents[continentName]
    if (infectedPopulation > 0) {
      infectedContinents.push(continentName)
    }
  })

  const nonInfectedContinents = []
  // Push the name of any infected continents to the array
  continentNames.forEach(continentName => {
    const { infectedPopulation } = continents[continentName]
    if (infectedPopulation === 0) {
      nonInfectedContinents.push(continentName)
    }
  })

  // TODO: Work on this.
  // * Things not working:
  // * - New dot is not drawn when a new continent is infected
  // * - will continue to infect new continents after the 1st one
  // Monitor the progression of the infection in each infected continent

  // TODO: You were pretty close to figuring this out.
  // * You just added code for an action that will set infection to / from when infecting
  // * Now you should be checking the infectionSpreadTo array on the continent
  // * making sure that it does not contain the current continent
  // * cuz then you don't want to spread it again.

  // Cycle through the infected continents.
  // If the current infectedContinent appears as a 'infectionSpreadFrom' on any continent,
  // return.
  // Otherwise, spread the infection.
  for (let i = 0; i < infectedContinents.length; i++) {
    const currentInfectedContinent = infectedContinents[i]
    const { infectionSpreadFrom } = continents[currentInfectedContinent]
    infectedContinents.forEach(infectedContinent => {
      const { infectedPopulation } = continents[infectedContinent]
      // If the infection has reached at least 10,000 people,
      // Spread to a new continent
      if (
        infectionSpreadFrom !== infectedContinent &&
        infectedPopulation >= 10000
      ) {
        const randomContinentName = sample(nonInfectedContinents)
        console.log(`Going to spread infection to ${randomContinentName}.`)
        console.log(`Infection is spreading from: ${infectedContinent}`)
        console.log(
          `infectedPopulation within ${infectedContinent} is: ${infectedPopulation}`
        )

        // Keep track of where the infection was spread from
        setInfectionSpreadFrom(infectedContinent, randomContinentName)
        // Calculate the infection
        calculateInfection(randomContinentName)
        // Calculate if you should add another location to the infected locations array
        calculateAdditionalLocations(randomContinentName)
        // Rebuild the places (dots)
        buildPlaces()
      }
    })
  }

  // * ✅ Should find out which continents have infections already
  // * Once the infection gets to a certain point in those continents
  // * There should be a threshold, then it should spread to a (random) (?) new continent
}, speed)

// /**
//  * Interval to infect. Doesn't necessarily mean an infection will happen.
//  */
// const infectionInterval = setInterval(() => {
//   const state = store.getState()
//   const { continentNames, day, patientZeroContinent } = state.world
//   // Skip the first time, since the interval will run the same time that Patient Zero is being infected
//   if (day !== 1) {
//     // Random boolean to decide if should infect
//     const randomBool = Math.random() >= 0.05
//     if (randomBool) {
//       if (day < 11) {
//         // If the day is less than 11,
//         // Keep the infection localized to one continent
//         // Calculate population changes
//         calculateInfection(patientZeroContinent)
//         // Calculate if you should add another location to the infected locations array
//         calculateAdditionalLocations(patientZeroContinent)
//       } else {
//         // It doesn't matter what continent is infected now
//         // Calculate population changes
//         const randomContinentName = sample(continentNames)
//         calculateInfection(randomContinentName)
//         // Calculate if you should add another location to the infected locations array
//         calculateAdditionalLocations(randomContinentName)
//       }
//     }
//   }
// }, speed)
