import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import { TimeTracker } from '../../components/TimeTracker'
import { developmentState } from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<TimeTracker />', () => {
  it('Should render snapshot of TimeTracker component.', () => {
    const { world } = developmentState
    const renderer = new ShallowRenderer()

    renderer.render(<TimeTracker dispatch={dispatch} world={world} />)
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
