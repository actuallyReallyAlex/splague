export const CHOOSE_MORALITY = 'CHOOSE_MORALITY'
export const CHANGE_SCREEN = 'CHANGE_SCREEN'

/**
 * Choose a morality for the player.
 * @param {String} morality Either "good" or "evil". The player's morality choice for the game.
 */
export const chooseMorality = morality => {
  return {
    type: CHOOSE_MORALITY,
    payload: {
      morality
    }
  }
}

/**
 * Changes the screen displayed to the user.
 * @param {String} nextScreen Name of the next screen to be displayed to the user.
 */
export const changeScreen = nextScreen => {
  return {
    type: CHANGE_SCREEN,
    payload: {
      screen: nextScreen
    }
  }
}
