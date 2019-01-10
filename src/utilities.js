// All from Grommet
const FACTOR = 10
const MAP_LAT_BOTTOM = -50.0 // empirically determined
const MAP_LAT_BOTTOM_RAD = (MAP_LAT_BOTTOM * Math.PI) / 180
const MAP_LON_LEFT = -171.0 // empirically determined
const MAP_LON_RIGHT = 184.0 // empirically determined
const MAP_LON_DELTA = MAP_LON_RIGHT - MAP_LON_LEFT
const maxCoordinate = (a, b) => [Math.max(a[0], b[0]), Math.max(a[1], b[1])]
const origin = [0, 0]
const extent = [93, 44]

// Builds a Continent
const buildContinentState = ({ area, dots, origin }) => {
  let extent = [...origin]
  const stateDots = dots
    .map(segment => {
      const count = segment[2]
      const spots = []
      for (let i = 0; i < count; i += 1) spots.push('h0')
      const dotCommands = spots.join(' m10,0 ')
      const x = FACTOR * (origin[0] + segment[0] + 1)
      const y = FACTOR * (origin[1] + segment[1] + 1)
      extent = maxCoordinate(extent, [
        origin[0] + segment[0] + segment[2],
        origin[1] + segment[1]
      ])
      return `M${x},${y} ${dotCommands}`
    })
    .join(' ')
  return stateDots
}

// Returns specifics about the map
const mapValues = extent => {
  const mapRadius = ((extent[0] / MAP_LON_DELTA) * 360) / (2 * Math.PI)
  const mapOffsetY = Math.round(
    (mapRadius / 2) *
      Math.log(
        (1 + Math.sin(MAP_LAT_BOTTOM_RAD)) / (1 - Math.sin(MAP_LAT_BOTTOM_RAD))
      )
  )
  return { mapRadius, mapOffsetY }
}

// Takes in points, and returns latitude and longitude.
export const coordToLatLon = (coord, origin, extent) => {
  const { mapRadius, mapOffsetY } = mapValues(extent)
  const a = (extent[1] + mapOffsetY - coord[1]) / mapRadius
  const lat = (180 / Math.PI) * (2 * Math.atan(Math.exp(a)) - Math.PI / 2)
  const lon = (coord[0] * MAP_LON_DELTA) / extent[0] + MAP_LON_LEFT
  return [lat, lon]
}

/**
 * Removes an element from an array.
 * @param {Array} array Array of elements to work with.
 * @param {String} unwantedElement The element you wish to remove from the array.
 * @param {Number} elementIndex If provided, will match this index term.
 * @returns {Array} An array without the unwanted element(s).
 */
const filterPredicate = (unwantedElement, element, elementIndex) => {
  return elementIndex
    ? unwantedElement !== element[elementIndex]
    : unwantedElement !== element
}

/**
 * Counts the number of manual dots that need to be created.
 * @param {Number} i Current index of element in the parent reduce function.
 * @param {Array} arr Source array in the parent reduce function.
 * @returns {Number} Number of manual dots to be created.
 */
const countNumberOfManualDots = (i, arr) => {
  let numberOfManualDots = 0
  // Count how many dots need to be created manually before the next real dot
  // 100 is just an arbitrary number larger than any number of manual dots you'll ever encounter
  for (let j = 0; j < 100 && j + i < arr.length; j++) {
    if (isNaN(arr[i + j][0])) {
      numberOfManualDots++
    } else {
      // Once you encounter an array that is a true dot, stop incrementing the number of manual dots.
      break
    }
  }
  return numberOfManualDots
}

/**
 * Creates an array of manual dots.
 * @param {Number} numberOfManualDots Number of manual dots to create.
 * @param {Number} i Current index of element in the parent reduce function.
 * @param {Array} arr Source array in the parent reduce function.
 * @returns {Array} An array of manual dots.
 */
const createManualDots = (numberOfManualDots, i, arr) => {
  const newDotArray = []
  for (let k = 1; k < numberOfManualDots + 1; k++) {
    // The last true dot in this row\
    const baseDot = arr[i - 1]

    // Make a new array where the first element is the base dot's first element plus 10
    newDotArray.push([baseDot[0] + k * 10, baseDot[1]])
  }
  return newDotArray
}

/**
 * Replaces placeholder dots ([NaN, 0]) with a manual dot.
 * @param {Array} result Accumulator in the parent reduce function.
 * @param {Array} element The current element in the parent reduce function. Will be either a "true dot" - [200, 10], or an array that represents a placeholder for a true dot - [NaN, 0].
 * @param {Number} i Index of element in the parent reduce function.
 * @param {Array} arr Source array in the parent reduce function.
 * @returns {Array} Result of placeholders being replaced with manual dots.
 */
const replacePlaceholders = (result, element, i, arr) => {
  if (isNaN(element[0])) {
    // This is a dot that needs to be added manually
    const numberOfManualDots = countNumberOfManualDots(i, arr)
    // Now that we know how many dots need to be added manually,
    // create an array for each one
    const arrayOfManualDots = createManualDots(numberOfManualDots, i, arr)
    arrayOfManualDots.forEach(newDotArray => result.push(newDotArray))
  } else {
    // This is a true dot
    result.push(element)
  }
  return result
}

/**
 * Deconstructs an svg string into an array of coordinates.
 * @param {Object} continent Continent to work with. Given by Grommet.
 * @returns An array of coordinates, corresponding to each dot on the map of the continent.
 */
export const deconstructContinentState = continent => {
  return buildContinentState(continent)
    .split(' ')
    .filter(element => filterPredicate('h0', element))
    .map(element => element.replace('M', ''))
    .map(element => {
      const splitUp = element.split(',')
      return [parseInt(splitUp[0]), parseInt(splitUp[1])]
    })
    .reduce(
      (result, element, i, arr) => replacePlaceholders(result, element, i, arr),
      []
    )
    .filter(element => filterPredicate(0, element, 1))
    .map(element => {
      const x = element[0] / FACTOR
      const y = element[1] / FACTOR
      return coordToLatLon([x, y], origin, extent)
    })
}
