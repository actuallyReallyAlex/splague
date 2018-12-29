import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import LogItem from '../../components/LogItem'
import log from '../fixtures/log'

describe('<LogItem />', () => {
  it('Should render snapshot of LogItem component.', () => {
    const { additionalInfo, description, icon, title } = log[0]
    const component = renderer
      .create(
        <Provider store={store}>
          <LogItem
            additionalInfo={additionalInfo}
            description={description}
            icon={icon}
            title={title}
          />
        </Provider>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
