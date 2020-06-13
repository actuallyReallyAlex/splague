import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { LogItem } from '../../components/LogItem'
import log from '../fixtures/log'

describe('<LogItem />', () => {
  it('Should render snapshot of LogItem component.', () => {
    const { additionalInfo, description, icon, time, title } = log[0]
    const component = renderer
      .create(
        <LogItem
          additionalInfo={additionalInfo}
          description={description}
          icon={icon}
          time={time}
          title={title}
        />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
