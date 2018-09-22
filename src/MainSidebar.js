import React, { Component } from 'react'
import { Menu, Label, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import bubonicIcon from './bubonic.svg'
import septicemicIcon from './septicemic.svg'
import pneumonicIcon from './pneumonic.svg'
import earthTribeIcon from './earthTribe.svg'
import warlordsIcon from './warlords.svg'
import tradesmenIcon from './tradesmen.svg'

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
      padding: '4px 1rem',
      background: '#1b1c1d',
      width: '250px'
    }

    const alivePopNum = this.props.world.alivePopulation
    const alivePopFormatted = alivePopNum.toLocaleString()
    const infectedPopNum = this.props.world.infectedPopulation
    const infectedPopFormatted = infectedPopNum.toLocaleString()
    const deadPopNum = this.props.world.deadPopulation
    const deadPopFormatted = deadPopNum.toLocaleString()

    const iconDictionary = [
      {
        name: 'Earth Tribe',
        icon: earthTribeIcon
      },
      {
        name: 'Tradesmen',
        icon: tradesmenIcon
      },
      {
        name: 'Warlords',
        icon: warlordsIcon
      },
      {
        name: 'Bubonic',
        icon: bubonicIcon
      },
      {
        name: 'Septicemic',
        icon: septicemicIcon
      },
      {
        name: 'Pneumonic',
        icon: pneumonicIcon
      }
    ]

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
              <Image
                size="small"
                circular
                centered
                src={
                  iconDictionary.find(obj => {
                    return obj.name === this.props.player.className
                  }).icon
                }
              />
              <h1>{this.props.player.name}</h1>
            </Menu.Header>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>World Information</Menu.Header>
            <Menu.Menu>
              <Menu.Item name="Alive Population">
                <Label>{alivePopFormatted}</Label>
                Alive Population
              </Menu.Item>
              <Menu.Item name="Infected Population">
                <Label>{infectedPopFormatted}</Label>
                Infected Population
              </Menu.Item>
              <Menu.Item name="Dead Population">
                <Label>{deadPopFormatted}</Label>
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
