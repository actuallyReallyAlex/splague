import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ChooseType } from '../../screens/ChooseType'
import developmentState from '../fixtures/developmentState'

describe('<ChooseType />', () => {
  it('Should render snapshot of ChooseType screen.', () => {
    const { player, ui } = developmentState
    const component = renderer
      .create(<ChooseType player={player} ui={ui} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
