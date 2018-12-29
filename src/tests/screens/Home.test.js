import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import Home from '../../screens/Home'

describe('<Home />', () => {
  it('Should render snapshot of Home screen.', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
