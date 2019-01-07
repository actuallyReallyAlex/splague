import React, { Component } from 'react'
import { base, Box, WorldMap as GrommetWorldMap } from 'grommet'
import { deconstructContinentState, NorthAmerica} from '../utilities'

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

const countNorthAmerica = () => {
  const northAmericaPlaces = []
  const NorthAmericaCoordinates = deconstructContinentState(NorthAmerica)
  for (let i = 0; i < NorthAmericaCoordinates.length; i++) {
    const place = {
      name: `testPlace-${i}`,
      color: 'accent-1',
      location: NorthAmericaCoordinates[i]
    }
    northAmericaPlaces.push(place)
  }
  return northAmericaPlaces
}

class WorldMap extends Component {
  state = {
    places: countNorthAmerica()
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
          continents={[
            { color: 'blue', name: 'Africa', onHover: e => console.log(e) },
            {
              color: 'red',
              name: 'North America',
              onHover: e => console.log(e)
            },
            { color: 'green', name: 'Asia', onHover: e => console.log(e) },
            {
              color: 'yellow',
              name: 'Australia',
              onHover: e => console.log(e)
            },
            { color: 'purple', name: 'Europe', onHover: e => console.log(e) },
            {
              color: 'pink',
              name: 'South America',
              onHover: e => console.log(e)
            }
          ]}
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
