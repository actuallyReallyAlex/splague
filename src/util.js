import store from './redux/store/store'
import { setPlaces } from './redux/actions/world'

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

  for (let i = 0; i < continentNames.length; i++) {
    const currentContinentName = continentNames[i]
    const currentContinentObject = continents[currentContinentName]
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
        color: 'green',
        location
      }
      finalPlaces.push(placeObject)
    })
  }
  store.dispatch(setPlaces(finalPlaces))
}

buildPlaces()
