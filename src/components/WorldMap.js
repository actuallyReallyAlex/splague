import React, { Component } from 'react'
import { base, Box, WorldMap as GrommetWorldMap } from 'grommet'
import { NorthAmerica, Australia, justLeftDotsNA } from '../constants'

const theme = {
  ...base,
  worldMap: {
    ...base.worldMap,
    place: {
      ...base.worldMap.place,
      active: '20px'
    },
    hover: {
      ...base.worldMap.hover,
      color: null
    }
  }
}

const buildPlaces = continent => {
  const places = []
  const continentCoordinates = continent.coordinates
  for (let i = 0; i < continentCoordinates.length; i++) {
    const place = {
      name: `testPlace-${i}`,
      color: 'accent-1',
      location: continentCoordinates[i]
    }
    places.push(place)
  }
  return places
}

class WorldMap extends Component {
  state = {
    // places: countJustLeftDotsNA()
    // places: buildPlaces(NorthAmerica)
    places: [],
    // index: 0
  }

  // makeDots = () => {
  //   setInterval(() => {
  //     const { index, places } = this.state
  //     const newPlace = {
  //       color: 'accent-1',
  //       location: NorthAmerica.coordinates[index]
  //     }
  //     const newPlaces = [...places, newPlace]
  //     const newIndex = index + 1
  //     this.setState(() => ({ index: newIndex, places: newPlaces }))
  //   }, 50)
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.makeDots()
  //   }, 10000);
  // }

  handleSelectPlace = place => {
    console.log(place)
    const { places } = this.state
    const newPlaces = []

    places.forEach(place => {
      newPlaces.push(place)
    })

    const newPlace = { color: 'accent-1', location: place }
    if (
      newPlaces.findIndex(obj => {
        return obj === newPlace
      }) === -1
    ) {
      newPlaces.push(newPlace)
    }

    this.setState(() => ({ places: newPlaces }))
  }

  render() {
    const { places } = this.state
    return (
      <Box
        align="center"
        justify="center"
        pad="medium"
        // style={{ border: 'red solid 3px' }}
        width="70%"
      >
        <GrommetWorldMap
          a11yTitle="WorldMap"
          onSelectPlace={this.handleSelectPlace}
          places={places}
          // style={{ border: 'red solid 3px' }}
          theme={theme}
        />
      </Box>
    )
  }
}

export default WorldMap
