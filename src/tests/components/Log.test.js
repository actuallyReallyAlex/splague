import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import Log from '../../components/Log'
import log from '../fixtures/log'

describe('<Log />', () => {
  it('Should render snapshot of Log component.', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <Log />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('Should render Log correctly with log data.', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <Log log={log} />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
