import React, { Component } from 'react'
import { Menu, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class MainSidebar extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state || {}

    const identity = this.props.player.morality === 'good' ? 'Doctor' : 'Plague'

    const semStyle = {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      // padding: '4px 0.5rem',
      padding: '4px 1rem',
      // margin: '2px',
      // color: '#8ff',
      // background: '#222'
      background: '#1b1c1d',
      width: '250px'
    }

    return (
      <div style={semStyle}>
        <Menu
          fluid
          inverted
          vertical
          borderless
          compact
          style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
        >
          <Menu.Item>
            <Menu.Header>
              <h1>{this.props.player.name}</h1>
            </Menu.Header>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>World Information</Menu.Header>
            <Menu.Menu>
              <Menu.Item name="Alive Population">
                <Label>{this.props.world.alivePopulation}</Label>
                Alive Population
              </Menu.Item>
              <Menu.Item name="Dead Population">
                <Label>{this.props.world.deadPopulation}</Label>
                Dead Population
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>{identity} Information</Menu.Header>
            <Menu.Menu>
              <Menu.Item name="Class Type">
                <Label>{this.props.player.classType}</Label>
                Class Type
              </Menu.Item>
              <Menu.Item name="Class Name">
                <Label>{this.props.player.className}</Label>
                Class Name
              </Menu.Item>
              <Menu.Item name="Plague Mutations">
                <Label>{this.props.plague.mutations}</Label>
                Plague Mutations
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Cure Information</Menu.Header>
            <Menu.Menu>
              <Menu.Item name="Completion">
                <Label>{this.props.cure.percentComplete}</Label>
                Completion
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

MainSidebar.propTypes = {
  player: PropTypes.object,
  world: PropTypes.object,
  plague: PropTypes.object,
  cure: PropTypes.object
}
