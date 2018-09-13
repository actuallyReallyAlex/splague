import React, { Component } from 'react'
import { Menu, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class MainSidebar extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

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
              <Menu.Item
                name="Population"
                active={activeItem === 'Population'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Plague Progression"
                active={activeItem === 'Plague Progression'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Cure Progression"
                active={activeItem === 'Cure Progression'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>{identity} Information</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name="Class Type"
                active={activeItem === this.props.player.classType}
                onClick={this.handleItemClick}
              >
                <Label>{this.props.player.classType}</Label>
                Class Type
              </Menu.Item>
              <Menu.Item
                name="Class Name"
                active={activeItem === this.props.player.className}
                onClick={this.handleItemClick}
              >
                <Label>{this.props.player.className}</Label>
                Class Name
              </Menu.Item>
              <Menu.Item
                name="Other Stuffs"
                active={activeItem === 'Other Stuffs'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

MainSidebar.propTypes = {
  player: PropTypes.object
}
