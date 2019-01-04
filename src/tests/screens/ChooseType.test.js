import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ChooseType } from '../../screens/ChooseType'
import { developmentState } from '../fixtures/developmentState'

const dispatch = jest.fn()

describe('<ChooseType />', () => {
  it('Should render snapshot of ChooseType screen.', () => {
    const { cure, log, plague, player, ui, world } = developmentState
    const component = renderer
      .create(
        <ChooseType
          cure={cure}
          dispatch={dispatch}
          log={log}
          plague={plague}
          player={player}
          ui={ui}
          world={world}
        />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
