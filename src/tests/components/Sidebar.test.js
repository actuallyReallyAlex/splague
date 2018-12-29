import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import Sidebar from '../../components/Sidebar'
import developmentState from '../fixtures/developmentState'

describe('<Sidebar />', () => {
  it('Should render snapshot of Sidebar component.', () => {
    const { cure, plague, player, world } = developmentState
    const component = renderer
      .create(
        <Provider store={store}>
          <Sidebar cure={cure} plague={plague} player={player} world={world} />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
