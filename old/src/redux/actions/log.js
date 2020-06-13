export const ADD_LOG_ITEM = 'ADD_LOG_ITEM'

/**
 * Adds a log item to the Log.
 * @param {Object} logItem LogItem details.
 */
export const addLogItem = logItem => {
  return {
    type: ADD_LOG_ITEM,
    payload: {
      logItem
    }
  }
}
