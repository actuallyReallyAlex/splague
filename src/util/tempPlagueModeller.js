/**
 * Plague Modeller. Models 1 day of plague activity, given specific input parameters.
 * @param {Number} healthy Number of healthy population.
 * @param {Number} infected Number of infected population.
 * @param {Number} dead Number of dead population.
 * @returns {Object} Returns an object with the new population counts for healthy, infected, and dead populations.
 */
export default (healthy, infected, dead) => ({
  healthy: healthy - 3,
  infected: infected + 2,
  dead: dead + 1
})
