import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import { ChooseMorality } from '../../screens/ChooseMorality'
import developmentState from '../fixtures/developmentState'

describe('<ChooseMorality />', () => {
  it('Should render snapshot of ChooseMorality screen.', () => {
    const { player, ui } = developmentState
    const renderer = new ShallowRenderer()
    renderer.render(<ChooseMorality player={player} ui={ui} />)
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
