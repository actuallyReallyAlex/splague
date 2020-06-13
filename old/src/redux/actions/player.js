export const CHOOSE_MODE = 'CHOOSE_MODE'
export const CHOOSE_NAME = 'CHOOSE_NAME'
export const CHOOSE_TYPE = 'CHOOSE_TYPE'

/**
 * Choose a mode for the player.
 * @param {String} mode Either "cure" or "plague". The player's mode choice for the game.
 */
export const chooseMode = mode => {
  return {
    type: CHOOSE_MODE,
    payload: {
      mode
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
