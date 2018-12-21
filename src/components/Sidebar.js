import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Image, Heading, Text } from 'grommet'
import SidebarData from './SidebarData'
import Tag from './Tag'

class Sidebar extends Component {
  state = {}
  render() {
    const { player } = this.props
    return (
      <Box
        align="center"
        background="dark-1"
        fill="vertical"
        pad="medium"
        width="250px"
      >
        <Box height="small" width="small" round="full">
          <Image
            style={{ borderRadius: '100%' }}
            fit="cover"
            src="./images/tradesmen.svg"
          />
        </Box>
        <Box fill="horizontal" justify="start">
          <Heading level="2">{player.name}</Heading>
        </Box>
        <Box fill="horizontal" justify="start" margin={{ bottom: 'medium' }}>
          <Text weight="bold" size="small">
            World Information
          </Text>
          <SidebarData label="Alive Population" data="450,000,000" />
          <SidebarData label="Infected Population" data="0" />
          <SidebarData label="Dead Population" data="0" />
        </Box>
        <Box fill="horizontal" justify="start" margin={{ bottom: 'medium' }}>
          <Text weight="bold" size="small">
            Player Information
          </Text>
          <SidebarData label="Class Type" data="Good" />
          <SidebarData label="Class Name" data="Tradesmen" />
          <SidebarData label="Plague Mutations" data="0" />
        </Box>
        <Box fill="horizontal" justify="start" margin={{ bottom: 'medium' }}>
          <Text weight="bold" size="small">
            Cure Information
          </Text>
          <SidebarData label="Completion" data="0" />
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Sidebar)
