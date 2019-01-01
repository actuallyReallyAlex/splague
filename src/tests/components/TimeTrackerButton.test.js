import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import { TimeTrackerButton } from '../../components/TimeTrackerButton'
import developmentState from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<TimeTrackerButton />', () => {
  it('Should render snapshot of TimeTrackerButton component.', () => {
    const { world } = developmentState
    const renderer = new ShallowRenderer()

    renderer.render(
      <TimeTrackerButton
        dispatch={dispatch}
        label="Label"
        time={1}
        world={world}
      />
    )
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
