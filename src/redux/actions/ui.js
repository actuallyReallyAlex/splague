export const CHANGE_SCREEN = 'CHANGE_SCREEN'
export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND'
export const CLOSE_LOG = 'CLOSE_LOG'
export const OPEN_LOG = 'OPEN_LOG'
export const TRANSITION_SCREEN = 'TRANSITION_SCREEN'

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

/**
 * Changes the background color of the screen.
 * @param {String} background Color. Either a Grommet color string such as "brand" or "dark-5", or a hex code such as "#000000"
 */
export const changeBackground = background => {
  return {
    type: CHANGE_BACKGROUND,
    payload: {
      background
    }
  }
}

/**
 * Closes the log.
 */
export const closeLog = () => {
  return {
    type: CLOSE_LOG
  }
}

/**
 * Opens the log.
 */
export const openLog = () => {
  return {
    type: OPEN_LOG
  }
}

/**
 * Transitions the screen.
 * @param {Boolean} isTransitioning Is the screen transitioning.
 * @param {String} transitionClasses String of class names to be applied.
 */
export const transitionScreen = (isTransitioning, transitionClasses) => {
  return {
    type: TRANSITION_SCREEN,
    payload: {
      isTransitioning,
      transitionClasses
    }
  }
}
