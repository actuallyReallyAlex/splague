// World Logic

import store from '../redux/store/store'
import { increaseDay, infectPatientZero } from '../redux/actions/world'

// Day Increaser
setInterval(() => {
  store.dispatch(increaseDay())
}, 10000)

// Infect Patient Zero
setTimeout(() => {
  store.dispatch(infectPatientZero())
}, 10000)

//     // Set a 10 second timeout until patient zero is infected
//     setTimeout(() => {
//       infectPatientZero(dispatch, world)
//     }, 10000)

//     setInterval(() => {
//       shouldInfect(world).then(result =>
//         console.log('From shouldInfect(): ', result)
//       )

//       // Decide if should infect - (PROMISE)
//       // THEN -> willInfect
//       // If YES
//       // Dispatch call for new population count with current population
//       // If NO
//       // Do nothing
//       // this.willInfect()
//       //   .then(willInfect => {
//       //     const { dispatch, world } = this.props
//       //     const currentInfectedPopulation = world.infectedPopulation
//       //     const continentToInfect = this.chooseContinent()
//       //     const infectionMultiplier = 0.25
//       //     let numberToInfect = Math.floor(
//       //       currentInfectedPopulation * infectionMultiplier
//       //     )
//       //     if (numberToInfect < 1) {
//       //       numberToInfect += 1
//       //     }
//       //     if (world.healthyPopulation < numberToInfect) {
//       //       numberToInfect = world.healthyPopulation
//       //       clearInterval(this.infectionInterval)
//       //     }
//       //     willInfect && dispatch(infectPopulation(numberToInfect))
//       //   })
//       //   .catch(err => {
//       //     console.error(err)
//       //   })
//     }, this.props.plague.speed)
//   }

//   // beginInfection = () => {
//   //   const startingContinent = this.chooseRandomContinent()
//   // }

//   // chooseRandomContinent = () => {
//   //   return sample(continents)
//   // }

//   // infect = () => {
//   //   const { dispatch, world } = this.props
//   //   const currentInfectedPopulation = world.infectedPopulation
//   //   const infectionMultiplier = 0.25
//   //   let numberToInfect = Math.floor(
//   //     currentInfectedPopulation * infectionMultiplier
//   //   )
//   //   if (numberToInfect < 1) {
//   //     numberToInfect += 1
//   //   }
//   //   if (world.healthyPopulation < numberToInfect) {
//   //     numberToInfect = world.healthyPopulation
//   //     clearInterval(this.infectionInterval)
//   //   }
//   //   willInfect && dispatch(infectPopulation(numberToInfect))
//   // }

//   // chooseContinent = () => {
//   //   const { world } = this.props

//   //   return new Promise((resolve, reject) => {

//   //   })
//   // }

//   // infectionInterval = setInterval(() => {
//   //   this.willInfect()
//   //     .then(willInfect => {
//   //       const { dispatch, world } = this.props
//   //       const currentInfectedPopulation = world.infectedPopulation
//   //       const continentToInfect = this.chooseContinent()
//   //       const infectionMultiplier = 0.25
//   //       let numberToInfect = Math.floor(
//   //         currentInfectedPopulation * infectionMultiplier
//   //       )
//   //       if (numberToInfect < 1) {
//   //         numberToInfect += 1
//   //       }
//   //       if (world.healthyPopulation < numberToInfect) {
//   //         numberToInfect = world.healthyPopulation
//   //         clearInterval(this.infectionInterval)
//   //       }
//   //       willInfect && dispatch(infectPopulation(numberToInfect))
//   //     })
//   //     .catch(err => {
//   //       console.error(err)
//   //     })
//   // }, this.props.plague.speed)

//   // willInfect = () => {
//   //   const infectionValue = Math.random()
//   //   const { world } = this.props
//   //   return new Promise((resolve, reject) => {
//   //     if (infectionValue > 0.75 && world.healthyPopulation > 0) {
//   //       resolve(true)
//   //     } else {
//   //       reject(false)
//   //     }
//   //   })
//   // }

//   // componentDidUpdate() {
//   //   const { speed } = this.state
//   //   const { plague } = this.props
//   //   if (speed !== plague.speed) {
//   //     clearInterval(this.infectionInterval)
//   //     this.setState(() => ({ speed: plague.speed }))
//   //     this.infectionInterval = setInterval(() => {
//   //       this.willInfect()
//   //         .then(willInfect => {
//   //           const { dispatch, world } = this.props
//   //           const currentInfectedPopulation = world.infectedPopulation
//   //           const infectionMultiplier = 0.25
//   //           let numberToInfect = Math.floor(
//   //             currentInfectedPopulation * infectionMultiplier
//   //           )
//   //           if (numberToInfect < 1) {
//   //             numberToInfect += 1
//   //           }
//   //           if (world.healthyPopulation < numberToInfect) {
//   //             numberToInfect = world.healthyPopulation
//   //             clearInterval(this.infectionInterval)
//   //           }
//   //           willInfect && dispatch(infectPopulation(numberToInfect))
//   //         })
//   //         .catch(err => {})
//   //     }, plague.speed)
//   //   }
//   // }

//   render() {
//     return null
//   }
// }

// const mapStateToProps = ({ plague, world }) => {
//   return { plague, world }
// }

// export default connect(mapStateToProps)(PlagueLogic)
