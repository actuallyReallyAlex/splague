import React from 'react'
import { connect } from 'react-redux'
import './logic/world'
import { Box, WorldMap } from 'grommet'

const Game = ({ dispatch, world }) => {
  const importantState = world

  const continentNames = [
    'Africa',
    'Asia',
    'Australia',
    'Europe',
    'NorthAmerica',
    'SouthAmerica'
  ]

  // Remove coordinates for now. This doesn't change.
  for (let i = 0; i < continentNames.length; i++) {
    const currentContinent = continentNames[i]
    delete importantState.continents[currentContinent].coordinates
    delete importantState.continents[currentContinent].locations
  }

  return (
    <Box background="black" direction="row" fill pad="large">
      <Box overflow="auto">
        <h2>World State</h2>
        <pre>{JSON.stringify(importantState, null, 2)}</pre>
      </Box>
      <Box justify="center" pad="medium">
        <WorldMap />
      </Box>
    </Box>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game)
