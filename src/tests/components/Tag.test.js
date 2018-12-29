import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import Tag from '../../components/Tag'

describe('<Tag />', () => {
  it('Should render snapshot of Tag component.', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <Tag label="100" />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
