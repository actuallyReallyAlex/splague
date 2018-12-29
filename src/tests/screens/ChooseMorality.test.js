import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import { ChooseMorality } from '../../screens/ChooseMorality'
import developmentState from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<ChooseMorality />', () => {
  it('Should render snapshot of ChooseMorality screen.', () => {
    const { cure, log, plague, player, ui, world } = developmentState
    const renderer = new ShallowRenderer()
    renderer.render(
      <ChooseMorality
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
