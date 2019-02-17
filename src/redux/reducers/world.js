// World Reducer

const worldReducerInitialState = {
  day: 0
}

export default (state = worldReducerInitialState, action) => {
  switch (action.type) {
    case 'INCREASE_DAY':
      return Object.assign({}, state, { day: state.day + 1 })
    default:
      return state
  }
}
