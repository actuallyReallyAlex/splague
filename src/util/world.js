/**
 * Calculates the new world population numbers.
 * @param {Object} continentsObject Object of continents.
 * @returns {Object} Object containing updated numbers for healthy, infected, and dead world population.
 */
export const calculateWorldPopulations = continentsObject => {
  const {
    Africa,
    Asia,
    Australia,
    Europe,
    NorthAmerica,
    SouthAmerica
  } = continentsObject
  const continentsArray = [
    Africa,
    Asia,
    Australia,
    Europe,
    NorthAmerica,
    SouthAmerica
  ]

  let newWorldHealthyPopulation = 0
  let newWorldInfectedPopulation = 0
  let newWorldDeadPopulation = 0
  continentsArray.forEach(continent => {
    newWorldHealthyPopulation += continent.healthyPopulation
    newWorldInfectedPopulation += continent.infectedPopulation
    newWorldDeadPopulation += continent.deadPopulation
  })

  return {
    healthyPopulation: newWorldHealthyPopulation,
    infectedPopulation: newWorldInfectedPopulation,
    deadPopulation: newWorldDeadPopulation
  }
}

export const buildLocationsObject = continentObject => {
  // const { coordinates, deadPopulation, healthyPopulation, infectedPopulation, infectionMultiplier, locations } = continentObject
  
  console.log({ continentObject })
  return {
    deadLocations: [],
    infectedLocations: []
  }
}