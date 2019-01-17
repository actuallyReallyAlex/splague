import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import { ChooseMode } from '../../screens/ChooseMode'
import { initialState } from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<ChooseMode />', () => {
  it('Should render snapshot of ChooseMode screen.', () => {
    const { cure, log, plague, player, ui, world } = initialState
    const renderer = new ShallowRenderer()
    renderer.render(
      <ChooseMode
        cure={cure}
        dispatch={dispatch}
        log={log}
        plague={plague}
        player={player}
        ui={ui}
        world={world}
      />
    )
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
