import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Log } from '../../components/Log'
import log from '../fixtures/log'

const dispatch = jest.fn()

describe('<Log />', () => {
  it('Should render snapshot of Log component.', () => {
    const component = renderer
      .create(<Log dispatch={dispatch} log={log} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
