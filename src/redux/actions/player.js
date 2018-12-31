export const CHOOSE_MORALITY = 'CHOOSE_MORALITY'
export const CHOOSE_NAME = 'CHOOSE_NAME'
export const CHOOSE_TYPE = 'CHOOSE_TYPE'

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
 * Sets a player name.
 * @param {String} name Player name.
 */
export const chooseName = name => {
  return {
    type: CHOOSE_NAME,
    payload: {
      name
    }
  }
}

/**
 * Sets a player's type.
 * @param {String} type Faction Type or Plague Type.
 */
export const chooseType = type => {
  return {
    type: CHOOSE_TYPE,
    payload: {
      type
    }
  }
}
