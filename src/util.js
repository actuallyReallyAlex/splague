import store from './redux/store/store'
import { setPlaces } from './redux/actions/world'
import sample from 'lodash.sample'

/**
 * Build places objects for the WorldMap.
 */
export const buildPlaces = () => {
  let finalPlaces = []
  const state = store.getState()
  const { continents } = state.world
  const continentNames = [
    'Africa',
    'Asia',
    'Australia',
    'Europe',
    'NorthAmerica',
    'SouthAmerica'
  ]

  continentNames.forEach(continentName => {
    const currentContinentObject = continents[continentName]
    const {
      deadLocations,
      healthyLocations,
      infectedLocations
    } = currentContinentObject.locations

    deadLocations.forEach(location => {
      const placeObject = {
        color: 'red',
        location
      }
      finalPlaces.push(placeObject)
    })

    healthyLocations.forEach(location => {
      const placeObject = {
        color: 'blue',
        location
      }
      finalPlaces.push(placeObject)
    })

    infectedLocations.forEach(location => {
      const placeObject = {
        color: '#00FF00',
        location
      }
      finalPlaces.push(placeObject)
    })
  })

  store.dispatch(setPlaces(finalPlaces))
}

buildPlaces()

export const getAdjacentLocation = continentName => {
  const state = store.getState()
  const { infectedLocations } = state.world.continents[continentName].locations
  const randomInfectedLocation = sample(infectedLocations)
  const { coordinates } = state.world.continents[continentName]
  const indexOfRandomInfectedLocation = coordinates.indexOf(
    randomInfectedLocation
  )
  // Assign a direction left or right of the original location
  let direction
  // TODO: Figure out if you can still accidentally get the same location twice?
  if (indexOfRandomInfectedLocation === 0) {
    direction = 'right'
  } else if (indexOfRandomInfectedLocation === coordinates.length) {
    direction = 'left'
  } else {
    if (Math.random() >= 0.5) {
      direction = 'left'
    } else {
      direction = 'right'
    }
  }
  // Get the index of the new location
  let indexOfNewLocationToInfect
  if (direction === 'right') {
    indexOfNewLocationToInfect = indexOfRandomInfectedLocation + 1
  } else {
    indexOfNewLocationToInfect = indexOfRandomInfectedLocation - 1
  }
  // Get the new location
  const newInfectionLocation = coordinates[indexOfNewLocationToInfect]

  return newInfectionLocation
}
