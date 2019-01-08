import React, { Component } from 'react'
import { base, Box, WorldMap as GrommetWorldMap } from 'grommet'
import { NorthAmerica, Australia } from '../constants'

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

const countAustralia = () => {
  const australiaPlaces = []
  const AustraliaCoordinates = Australia.coordinates
  for (let i = 0; i < AustraliaCoordinates.length; i++) {
    const place = {
      name: `testPlace-${i}`,
      color: 'accent-1',
      location: AustraliaCoordinates[i]
    }
    australiaPlaces.push(place)
  }
  return australiaPlaces
}

class WorldMap extends Component {
  state = {
    places: countAustralia()
  }

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
        style={{ border: 'red solid 3px' }}
        width="70%"
      >
        <GrommetWorldMap
          a11yTitle="WorldMap"
          onSelectPlace={this.handleSelectPlace}
          places={places}
          style={{ border: 'red solid 3px' }}
          theme={theme}
        />
      </Box>
    )
  }
}

export default WorldMap
