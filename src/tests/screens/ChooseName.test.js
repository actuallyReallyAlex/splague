import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import ChooseName from '../../screens/ChooseName'

describe('<ChooseName />', () => {
  it('Should render snapshot of ChooseName screen.', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <ChooseName />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
