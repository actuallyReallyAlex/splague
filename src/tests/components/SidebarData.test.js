import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import SidebarData from '../../components/SidebarData'
import developmentState from '../fixtures/developmentState'

describe('<SidebarData />', () => {
  it('Should render snapshot of SidebarData component.', () => {
    const { world } = developmentState
    const component = renderer
      .create(
        <Provider store={store}>
          <SidebarData
            label="Alive Population"
            data={world.alivePopulation.toLocaleString()}
          />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
