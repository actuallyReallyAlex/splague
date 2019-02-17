import React from 'react'
import { connect } from 'react-redux'
import './logic/world'

const Game = ({ dispatch, world }) => {
  return (
    <div>
      <h2>World State</h2>
      <pre>{JSON.stringify(world, null, 2)}</pre>
    </div>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Game)
