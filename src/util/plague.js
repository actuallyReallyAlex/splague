import store from '../redux/store/store'
// import { simple } from 'plague-modeller'
// import plagueModeller from '../util/tempPlagueModeller'
import sample from 'lodash.sample'
import { infectPopulation } from '../redux/actions/world'
// import { continents } from '../constants'

export const infectPatientZero = () => {
  const state = store.getState()
  const { continents } = state.world
  // Choose a random continent to infect
  const continent = sample(continents)
  // Choose a random location on that continent
  const { coordinates } = continent
  const location = sample(coordinates)
  // Infect one person on that continent
  console.log('CALLING infectPopulation()')
  console.log('Arguments:')
  console.log({ continent, location, numberToInfect: 1 })
  store.dispatch(infectPopulation(continent, location, 1))
  // Light up one dot
  // Add a log item
}

/**
 * Decides if an infection will occur.
 * @param {Object} world World object from store.
 * @returns {Promise} Resolves if yes, rejects if no.
 */
export const shouldInfect = world => {
  // SHOULD INFECT:

  // SHOULD NOT INFECT:

  return new Promise((resolve, reject) => {
    resolve('lalala')
  })
}

// Set a 10 second timeout until patient zero is infected
setTimeout(() => {
  infectPatientZero()
}, 10000)

// // import sample from 'lodash.sample'
// // import { continents } from '../constants'
// // import { infectPopulation } from '../redux/actions/world'

// const math = require('mathjs')

// // ! UNDER CONSTRUCTION
// // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5493801/

// const binomial = (n, k) => {
//   if (typeof n !== 'number' || typeof k !== 'number') return false
//   let coeff = 1
//   for (var x = n - k + 1; x <= n; x++) coeff *= x
//   for (x = 1; x <= k; x++) coeff /= x
//   return coeff
// }

// const epidemiologicalModel = {
//   humans: {
//     NH: 250000, // Initial Human Population Size
//     dH: 0.0000898, // Human Non-Plague Death Rate,
//     bH: 0.0000898, // Human Birth Rate,
//     βH: 0.0145, // Transmission Rate From Rat Carcasses To Susceptible Humans,
//     βI: 0.0215, // Interhuman Transmission Rate,
//     γH: 1 / 18, // Rate Of Death Of Infected Humans - 1/18 Per Day
//     gH: 0.1 // Probability Of Human Survival From Plague
//   },
//   rats: {
//     KR: 250000, // Initial Size of Rat Population
//     p0: 0.0279, // Proportion of Rats Initially Infected
//     βR: 0.77, // Transmission Rate From Rat Carcasses To Susceptible Rats
//     ρ: 2.63, // Rat Carcass Infectivity Range
//     γR: 1 / 18, // Death Rate of Infected Rats - 1/18 Per Day
//     δR: 0.267 // Rate Of Loss Of Infectiousness Of Rat Carcasses
//   }
// }

// const d3Equation = variableObject => {
//   const numerator =
//     epidemiologicalModel.rats.βR *
//     variableObject.rats.Q *
//     (1 -
//       Math.pow(
//         Math.E,
//         (-1 * epidemiologicalModel.rats.ρ * variableObject.rats.TR) /
//           epidemiologicalModel.rats.KR
//       ))
//   const denominator = variableObject.rats.TR
//   return numerator / denominator
// }

// const d6Equation = variableObject => {
//   // Calc first fraction
//   const firstNumerator =
//     epidemiologicalModel.humans.βH *
//     variableObject.rats.Q *
//     Math.pow(
//       Math.E,
//       (-1 * epidemiologicalModel.rats.ρ * variableObject.rats.TR) /
//         epidemiologicalModel.rats.KR
//     )
//   const firstDenominator = epidemiologicalModel.rats.KR
//   const firstFraction = firstNumerator / firstDenominator

//   // Calc second fraction
//   const secondNumerator =
//     epidemiologicalModel.humans.βI * variableObject.humans.IH
//   const secondDenominator = epidemiologicalModel.humans.NH
//   const secondFraction = secondNumerator / secondDenominator

//   return firstFraction + secondFraction
// }

// const d7and8Equation = variableObject => {
//   let a = Math.round(variableObject.humans.IH)
//   let b = Math.round(epidemiologicalModel.humans.γH * (1 - epidemiologicalModel.humans.gH))
//   let c = Math.round(epidemiologicalModel.humans.γH * epidemiologicalModel.humans.gH)
//   let numbers = [a, b, c]

//   let finalNumbers = numbers.map(num => {
//     if (num < 1) {
//       num = 1
//     }
//     return num
//   })

//   return math.multinomial(finalNumbers)
// }

// const initialObject = {
//   humans: {
//     SH: 579000000, // Number of Susceptible Humans
//     IH: 0, // Number of Infected Humans
//     DH: 0 // Number of Dead Humans
//   },
//   rats: {
//     SR: 250000, // Number of Susceptible Rats
//     IR: 0, // Number of Infected Rats,
//     TR: 250000, // Number of Live Rats
//     Q: 0 // Number of Infectious Rat Carcasses
//   }
// }

// const stepOne = variableObject => {
//   const vectors = {
//     d1: binomial(variableObject.humans.SH, epidemiologicalModel.humans.bH), // Susceptible Humans, Human Birth Rate
//     d2: binomial(variableObject.humans.SH, epidemiologicalModel.humans.dH), // Susceptible Humans, Human Death Rate
//     d3: binomial(variableObject.rats.SR, d3Equation(variableObject)), // Susceptible Rats, ?
//     d4: binomial(variableObject.rats.IR, epidemiologicalModel.rats.γR), // Infected Rats, Death Rate of Infected Rats
//     d5: binomial(variableObject.rats.Q, epidemiologicalModel.rats.δR), // Number of Infectious Rat Carcasses, Rate of Loss of Infectiousness of Rat Carcasses
//     d6: binomial(variableObject.humans.SH, d6Equation(variableObject)), // Susceptible Humans, ?
//     d7: d7and8Equation(variableObject), // ?
//     d8: d7and8Equation(variableObject) // ?
//   }
//   return vectors
// }

// const stepTwo = (vectors, object) => {
//   const newObject = {
//     humans: {
//       SH: object.humans.SH + vectors.d1 - vectors.d2 - vectors.d6 + vectors.d8, // Number of Susceptible Humans
//       IH: object.humans.IH + vectors.d6 - vectors.d7 + vectors.d8, // Number of Infected Humans
//       DH: object.humans.DH + vectors.d7 + vectors.d2 // Number of Dead Humans
//     },
//     rats: {
//       SR: object.rats.SR - vectors.d3, // Number of Susceptible Rats
//       IR: object.rats.IR + vectors.d3 - vectors.d4, // Number of Infected Rats,
//       TR:
//         object.rats.SR -
//         vectors.d3 +
//         (object.rats.IR + vectors.d3 - vectors.d4), // Number of Live Rats
//       Q: object.rats.Q + vectors.d4 - vectors.d5 // Number of Infectious Rat Carcasses
//     }
//   }

//   console.log('object.humans.SH -', object.humans.SH)
//   console.log('vectors.d1 -', vectors.d1)
//   console.log('vectors.d2 -', vectors.d2)
//   console.log('vectors.d6 -', vectors.d6)
//   console.log('vectors.d8 -', vectors.d8)

//   return newObject
// }

// const day1Vectors = stepOne(initialObject)
// const day1Object = stepTwo(day1Vectors, initialObject)

// console.log(day1Object)

// // const day2Vectors = stepOne(day1Object)
// // const day2Object = stepTwo(day2Vectors, day1Object)

// // const day3Vectors = stepOne(day2Object)
// // const day3Object = stepTwo(day3Vectors, day2Object)

// // const day4Vectors = stepOne(day3Object)
// // const day4Object = stepTwo(day4Vectors, day3Object)

// // const day5Vectors = stepOne(day4Object)
// // const day5Object = stepTwo(day5Vectors, day4Object)

// // const day6Vectors = stepOne(day5Object)
// // const day6Object = stepTwo(day6Vectors, day5Object)

// // const day7Vectors = stepOne(day6Object)
// // const day7Object = stepTwo(day7Vectors, day6Object)

// // const day8Vectors = stepOne(day7Object)
// // const day8Object = stepTwo(day8Vectors, day7Object)

// // const day9Vectors = stepOne(day8Object)
// // const day9Object = stepTwo(day9Vectors, day8Object)

// // const day10Vectors = stepOne(day9Object)
// // const day10Object = stepTwo(day10Vectors, day9Object)

// // console.log(day2Object)
// // console.log(day3Object)
// // console.log(day4Object)
// // console.log(day5Object)
// // console.log(day6Object)
// // console.log(day7Object)
// // console.log(day8Object)
// // console.log(day9Object)
// // console.log(day10Object)

// // const plagueConstants = {
// //   humans: {
// //     birthRate: 0.0000898,
// //     deathRate: 0.0000898
// //   },
// //   rats: {
// //     carcassInfectivityRange: 2.63,
// //     deathRate: 1 / 18,
// //     rateOfLossOfInfectiousnessOfRatCarcasses: 0.267,
// //     transmissionRateFromRatCarcassToLiveRat: 0.77
// //   }
// // }

// // const initialCompartmentalVariables = {
// //   humans: {
// //     dead: 0,
// //     infected: 0,
// //     susceptible: 250000
// //   },
// //   rats: {
// //     infected: initialCompartmentalVariables.rats.initialPopulation * 0.0279,
// //     infectedCarcasses: 0,
// //     initialPopulation: 250000,
// //     susceptible: initialCompartmentalVariables.rats.initialPopulation * (1 - 0.0279),
// //   }
// // }

// // const variables = {
// //   humans: {
// //     susceptible: initialCompartmentalVariables.humans.susceptible
// //   },
// //   rats: {

// //   }
// // }

// // const dayOne = stepOne(variables)

// // console.log(dayOne)
// // // }

// // const beginInfection = () => {
// //   const startingContinent = this.chooseRandomContinent()
// // }

// // /**
// //  * Selects a continent randomly.
// //  * @returns {Object} A continent object.
// //  */
// // const chooseRandomContinent = () => sample(continents)

// // /**
// //  * Infects a number of people with the plague.
// //  * @param {Function} dispatch Redux dispatch function.
// //  * @param {Object} continent Continent object constant.
// //  * @param {Array} location Location array of coordinates to infect.
// //  * @param {Boolean} singlePerson Flag to returning just one person to infect.
// //  */
// // export const infect = (dispatch, continent, location, singlePerson = false) => {
// //   if (singlePerson) {
// //     dispatch(infectPopulation(continent, location, 1))
// //   } else {
// //   }

// //   // Calculate percentage of population by dots
// //   // Figure out if its gotten to the point where you can turn on a dot
// //   // Dispatch an action to update the infected places
// //   // Dispatch an action to update the dead places

// //   // const currentInfectedPopulation = world.infectedPopulation
// //   // const infectionMultiplier = 0.25
// //   // let numberToInfect = Math.floor(
// //   //   currentInfectedPopulation * infectionMultiplier
// //   // )
// //   // if (numberToInfect < 1) {
// //   //   numberToInfect += 1
// //   // }
// //   // if (world.healthyPopulation < numberToInfect) {
// //   //   numberToInfect = world.healthyPopulation
// //   //   clearInterval(this.infectionInterval)
// //   // }
// //   // willInfect && dispatch(infectPopulation(numberToInfect))
// // }

// // // chooseContinent = () => {
// // //   const { world } = this.props

// // //   return new Promise((resolve, reject) => {

// // //   })
// // // }

// // // infectionInterval = setInterval(() => {
// // //   this.willInfect()
// // //     .then(willInfect => {
// // //       const { dispatch, world } = this.props
// // //       const currentInfectedPopulation = world.infectedPopulation
// // //       const continentToInfect = this.chooseContinent()
// // //       const infectionMultiplier = 0.25
// // //       let numberToInfect = Math.floor(
// // //         currentInfectedPopulation * infectionMultiplier
// // //       )
// // //       if (numberToInfect < 1) {
// // //         numberToInfect += 1
// // //       }
// // //       if (world.healthyPopulation < numberToInfect) {
// // //         numberToInfect = world.healthyPopulation
// // //         clearInterval(this.infectionInterval)
// // //       }
// // //       willInfect && dispatch(infectPopulation(numberToInfect))
// // //     })
// // //     .catch(err => {
// // //       console.error(err)
// // //     })
// // // }, this.props.plague.speed)

// // // willInfect = () => {
// // //   const infectionValue = Math.random()
// // //   const { world } = this.props
// // //   return new Promise((resolve, reject) => {
// // //     if (infectionValue > 0.75 && world.healthyPopulation > 0) {
// // //       resolve(true)
// // //     } else {
// // //       reject(false)
// // //     }
// // //   })
// // // }

// // // componentDidUpdate() {
// // //   const { speed } = this.state
// // //   const { plague } = this.props
// // //   if (speed !== plague.speed) {
// // //     clearInterval(this.infectionInterval)
// // //     this.setState(() => ({ speed: plague.speed }))
// // //     this.infectionInterval = setInterval(() => {
// // //       this.willInfect()
// // //         .then(willInfect => {
// // //           const { dispatch, world } = this.props
// // //           const currentInfectedPopulation = world.infectedPopulation
// // //           const infectionMultiplier = 0.25
// // //           let numberToInfect = Math.floor(
// // //             currentInfectedPopulation * infectionMultiplier
// // //           )
// // //           if (numberToInfect < 1) {
// // //             numberToInfect += 1
// // //           }
// // //           if (world.healthyPopulation < numberToInfect) {
// // //             numberToInfect = world.healthyPopulation
// // //             clearInterval(this.infectionInterval)
// // //           }
// // //           willInfect && dispatch(infectPopulation(numberToInfect))
// // //         })
// // //         .catch(err => {})
// // //     }, plague.speed)
// // //   }
// // // }
