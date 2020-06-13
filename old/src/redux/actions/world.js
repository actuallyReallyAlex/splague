export const INCREASE_DAY = 'INCREASE_DAY'
export const SET_DAY_LENGTH = 'SET_DAY_LENGTH'

export const increaseDay = () => {
  return {
    type: INCREASE_DAY,
  }
}

export const setDayLength = dayLength => {
  return {
    type: SET_DAY_LENGTH,
    payload: {
      dayLength
    }
  }
}
