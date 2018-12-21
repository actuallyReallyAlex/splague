import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Image, Heading, Text } from 'grommet'
import SidebarData from './SidebarData'

class Sidebar extends Component {
  state = {}
  render() {
    const { cure, plague, player, world } = this.props
    return (
      <Box
        align="center"
        background="dark-1"
        fill="vertical"
        pad="large"
        width="250px"
      >
        <Box background="brand" height="small" width="small" round="full">
          {/* <Image
            style={{ borderRadius: '100%' }}
            fit="cover"
            src="./images/tradesmen.svg"
          /> */}
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
