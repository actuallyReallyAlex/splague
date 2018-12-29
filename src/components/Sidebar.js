import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Heading, Text } from 'grommet'
import SidebarData from './SidebarData'

export class Sidebar extends Component {
  static propTypes = {
    // From mapStateToProps()
    cure: PropTypes.object.isRequired,
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    log: PropTypes.array.isRequired,
    // From mapStateToProps()
    plague: PropTypes.object.isRequired,
    // From mapStateToProps()
    player: PropTypes.object.isRequired,
    // From mapStateToProps()
    ui: PropTypes.object.isRequired,
    // From mapStateToProps()
    world: PropTypes.object.isRequired
  }

  render() {
    const { cure, plague, player, world } = this.props
    return (
      <Box
        align="center"
        background="#1b1c1d"
        fill="vertical"
        pad="small"
        width="250px"
      >
        <Box
          align="center"
          background="brand"
          height="small"
          justify="center"
          width="small"
          round="full"
        >
          <Text size="small">Image Placeholder</Text>
        </Box>
        <Box fill="horizontal" justify="start">
          <Heading level="2">{player.name}</Heading>
        </Box>
        <Box fill="horizontal" justify="start" margin={{ bottom: 'medium' }}>
          <Text weight="bold" size="small">
            World Information
          </Text>
          <SidebarData
            label="Alive Population"
            data={world.alivePopulation.toLocaleString()}
          />
          <SidebarData
            label="Healthy Population"
            data={world.healthyPopulation.toLocaleString()}
          />
          <SidebarData
            label="Infected Population"
            data={world.infectedPopulation.toLocaleString()}
          />
          <SidebarData
            label="Dead Population"
            data={world.deadPopulation.toLocaleString()}
          />
        </Box>
        <Box fill="horizontal" justify="start" margin={{ bottom: 'medium' }}>
          <Text weight="bold" size="small">
            Player Information
          </Text>
          <SidebarData label="Class Type" data={player.type} />
          <SidebarData label="Plague Mutations" data={plague.mutations} />
        </Box>
        <Box fill="horizontal" justify="start" margin={{ bottom: 'medium' }}>
          <Text weight="bold" size="small">
            Cure Information
          </Text>
          <SidebarData
            label="Completion"
            data={`${Math.floor((cure.percentComplete / 100) * 100)} %`}
          />
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Sidebar)
