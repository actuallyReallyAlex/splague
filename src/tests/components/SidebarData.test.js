import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { SidebarData } from '../../components/SidebarData'
import { developmentState } from '../fixtures/developmentState'

describe('<SidebarData />', () => {
  it('Should render snapshot of SidebarData component.', () => {
    const { world } = developmentState
    const component = renderer
      .create(
        <SidebarData
          label="Alive Population"
          data={world.alivePopulation.toLocaleString()}
        />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
