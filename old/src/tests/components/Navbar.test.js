import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import Navbar from '../../components/Navbar'
import { developmentState } from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<Navbar />', () => {
  it('Should render snapshot of Navbar component.', () => {
    const { player, ui } = developmentState
    const renderer = new ShallowRenderer()
    renderer.render(<Navbar dispatch={dispatch} player={player} ui={ui} />)
    const result = renderer.getRenderOutput()
    expect(result).toMatchSnapshot()
  })
})
