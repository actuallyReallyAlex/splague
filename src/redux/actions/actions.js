export const CHOOSE_MORALITY = 'CHOOSE_MORALITY'
export const CHOOSE_NAME = 'CHOOSE_NAME'
export const CHOOSE_TYPE = 'CHOOSE_TYPE'
export const CHANGE_SCREEN = 'CHANGE_SCREEN'
export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND'
export const TRANSITION_SCREEN = 'TRANSITION_SCREEN'
export const INFECT_POPULATION = 'INFECT_POPULATION'

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

export const changeBackground = background => {
  return {
    type: CHANGE_BACKGROUND,
    payload: {
      background
    }
  }
}

export const transitionScreen = (isTransitioning, transitionClasses) => {
  return {
    type: TRANSITION_SCREEN,
    payload: {
      isTransitioning,
      transitionClasses
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

export const infectPopulation = numberToInfect => {
  return {
    type: INFECT_POPULATION,
    payload: {
      numberToInfect
    }
  }
}