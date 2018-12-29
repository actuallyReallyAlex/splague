import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Log } from '../../components/Log'
import log from '../fixtures/log'

describe('<Log />', () => {
  it('Should render snapshot of Log component.', () => {
    const component = renderer.create(<Log />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('Should render Log correctly with log data.', () => {
    const component = renderer.create(<Log log={log} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
