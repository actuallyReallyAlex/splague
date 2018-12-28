import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { infectPopulation } from '../redux/actions/actions'

class PlagueLogic extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  state = {}

  willInfect = () => {
    const infectionValue = Math.random()
    return new Promise((resolve, reject) => {
      infectionValue > 0.75 ? resolve(true) : reject(false)
    })
  }

  calculateInfection = () => {
    const { plague } = this.props
    setInterval(() => {
      this.willInfect()
        .then(willInfect => {
          const { dispatch, world } = this.props
          const currentInfectedPopulation = world.infectedPopulation
          const infectionMultiplier = 0.25
          let numberToInfect = Math.floor(
            currentInfectedPopulation * infectionMultiplier
          )
          if (numberToInfect < 1) {
            numberToInfect += 1
          }
          willInfect && dispatch(infectPopulation(numberToInfect))
        })
        .catch(err => {})
    }, plague.speed)
  }

  componentDidMount() {
    // this.calculateInfection()
  }

  render() {
    return <></>
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(PlagueLogic)
