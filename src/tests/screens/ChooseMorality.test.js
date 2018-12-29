import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import ChooseMorality from '../../screens/ChooseMorality'

describe('<ChooseMorality />', () => {
  it('Should render snapshot of ChooseMorality screen.', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <ChooseMorality />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
