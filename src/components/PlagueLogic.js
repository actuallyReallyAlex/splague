import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { infectPopulation } from '../redux/actions/plague'

class PlagueLogic extends Component {
  static propTypes = {
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    plague: PropTypes.object.isRequired,
    // From mapStateToProps()
    world: PropTypes.object.isRequired
  }

  state = {
    speed: 1000
  }

  infectionInterval = setInterval(() => {
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
        if (world.healthyPopulation < numberToInfect) {
          numberToInfect = world.healthyPopulation
          clearInterval(this.infectionInterval)
        }
        willInfect && dispatch(infectPopulation(numberToInfect))
      })
      .catch(err => {})
  }, this.props.plague.speed)

  willInfect = () => {
    const infectionValue = Math.random()
    const { world } = this.props
    return new Promise((resolve, reject) => {
      if (infectionValue > 0.75 && world.healthyPopulation > 0) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }

  componentDidUpdate() {
    const { speed } = this.state
    const { plague } = this.props
    if (speed !== plague.speed) {
      clearInterval(this.infectionInterval)
      this.setState(() => ({ speed: plague.speed }))
      this.infectionInterval = setInterval(() => {
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
            if (world.healthyPopulation < numberToInfect) {
              numberToInfect = world.healthyPopulation
              clearInterval(this.infectionInterval)
            }
            willInfect && dispatch(infectPopulation(numberToInfect))
          })
          .catch(err => {})
      }, plague.speed)
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = ({ plague, world }) => {
  return { plague, world }
}

export default connect(mapStateToProps)(PlagueLogic)
