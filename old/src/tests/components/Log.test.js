import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Log } from '../../components/Log'
import log from '../fixtures/log'
import { developmentState } from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<Log />', () => {
  it('Should render snapshot of Log component.', () => {
    const { ui } = developmentState
    const component = renderer
      .create(<Log dispatch={dispatch} log={log} ui={ui} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
