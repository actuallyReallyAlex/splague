import React from 'react'
import { connect } from 'react-redux'
import './logic/world'
import { Box } from 'grommet'
import WorldMap from './components/WorldMap'

const Game = ({ dispatch, world }) => {
  const { continents } = world
  const importantInfo = {
    infectedPopulation: world.infectedPopulation,
    patientZeroContinent: world.patientZeroContinent,
    day: world.day,
    continents: {
      Africa: continents.Africa.infectedPopulation,
      Asia: continents.Asia.infectedPopulation,
      Australia: continents.Australia.infectedPopulation,
      Europe: continents.Europe.infectedPopulation,
      NorthAmerica: continents.NorthAmerica.infectedPopulation,
      SouthAmerica: continents.SouthAmerica.infectedPopulation
    }
  }
  return (
    <Box background="black" direction="row" fill pad="large">
      <Box overflow="auto">
        <h2>World State</h2>
        <pre>{JSON.stringify(importantInfo, null, 2)}</pre>
      </Box>
      <Box justify="center" pad="medium">
        <WorldMap />
      </Box>
    </Box>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game)
