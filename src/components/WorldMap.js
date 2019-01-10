import React, { Component } from 'react'
import { base, Box, WorldMap as GrommetWorldMap } from 'grommet'
import { deconstructContinentState } from '../utilities'

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

class WorldMap extends Component {
  state = {
    places: []
  }

  buildPlaces = continent => {
    const places = []
    const continentCoordinates = deconstructContinentState(continent)
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

  render() {
    const { places } = this.state
    return (
      <Box align="center" justify="center" pad="medium" width="70%">
        <GrommetWorldMap
          a11yTitle="WorldMap"
          onSelectPlace={this.handleSelectPlace}
          places={places}
          theme={theme}
        />
      </Box>
    )
  }
}

export default WorldMap
