import React from 'react'
import { connect } from 'react-redux'
import './logic/world'

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
  }

  return (
    <div>
      <h2>World State</h2>
      <pre>{JSON.stringify(importantState, null, 2)}</pre>
    </div>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game)
