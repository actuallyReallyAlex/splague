import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import ChooseType from '../../screens/ChooseType'

describe('<ChooseType />', () => {
  it('Should render snapshot of ChooseType screen.', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <ChooseType />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
