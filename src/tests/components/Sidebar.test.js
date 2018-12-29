import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Sidebar } from '../../components/Sidebar'
import developmentState from '../fixtures/developmentState'

describe('<Sidebar />', () => {
  it('Should render snapshot of Sidebar component.', () => {
    const { cure, plague, player, world } = developmentState
    const component = renderer
      .create(
        <Sidebar cure={cure} plague={plague} player={player} world={world} />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
