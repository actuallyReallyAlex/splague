import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { base, Box, WorldMap as GrommetWorldMap } from 'grommet'
import { deconstructContinentState } from '../util/utilities'

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

export class WorldMap extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    world: PropTypes.object.isRequired
  }
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

const mapStateToProps = ({ world }) => ({ world })

export default connect(mapStateToProps)(WorldMap)
