import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ChooseName } from '../../screens/ChooseName'
import developmentState from '../fixtures/developmentState'

describe('<ChooseName />', () => {
  it('Should render snapshot of ChooseName screen.', () => {
    const { player, ui } = developmentState
    const component = renderer
      .create(<ChooseName player={player} ui={ui} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
