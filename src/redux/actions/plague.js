export const SET_PLAGUE_SPEED = 'SET_PLAGUE_SPEED'

/**
 * Sets a plague speed interval in ms.
 * @param {Number} plagueSpeed Speed of plague interval in ms.
 */
export const setPlagueSpeed = plagueSpeed => {
  return {
    type: SET_PLAGUE_SPEED,
    payload: {
      plagueSpeed
    }
  }
}
