export const CHOOSE_MORALITY = 'CHOOSE_MORALITY'

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
