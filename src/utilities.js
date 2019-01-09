// From Grommet
const NorthAmerica = {
  name: 'North America',
  origin: [0, 0],
  area: [[21, 0], [39, 0], [39, 6], [22, 26], [16, 23], [2, 12], [0, 7]],
  dots: [
    [22, 0, 6],
    [29, 0, 1],
    [31, 0, 1],
    [33, 0, 5],
    [20, 1, 1],
    [22, 1, 1],
    [24, 1, 2],
    [27, 1, 13],
    [17, 2, 1],
    [20, 2, 5],
    [26, 2, 13],
    [13, 3, 1],
    [19, 3, 1],
    [21, 3, 3],
    [26, 3, 14],
    [14, 4, 1],
    [16, 4, 4],
    [21, 4, 3],
    [29, 4, 11],
    [12, 5, 3],
    [16, 5, 1],
    [18, 5, 1],
    [20, 5, 3],
    [24, 5, 1],
    [30, 5, 8],
    [14, 6, 3],
    [19, 6, 1],
    [22, 6, 4],
    [31, 6, 8],
    [0, 7, 15],
    [16, 7, 1],
    [18, 7, 4],
    [24, 7, 2],
    [30, 7, 7],
    [2, 8, 20],
    [24, 8, 3],
    [29, 8, 5],
    [2, 9, 20],
    [24, 9, 2],
    [30, 9, 3],
    [1, 10, 18],
    [23, 10, 2],
    [31, 10, 1],
    [2, 11, 2],
    [8, 11, 11],
    [23, 11, 2],
    [26, 11, 1],
    [2, 12, 1],
    [8, 12, 13],
    [24, 12, 3],
    [10, 13, 12],
    [23, 13, 5],
    [11, 14, 17],
    [11, 15, 9],
    [21, 15, 6],
    [28, 15, 2],
    [11, 16, 11],
    [23, 16, 4],
    [11, 17, 14],
    [12, 18, 11],
    [12, 19, 12],
    [13, 20, 9],
    [15, 21, 3],
    [22, 21, 1],
    [16, 22, 2],
    [16, 23, 2],
    [20, 23, 1],
    [23, 23, 1],
    [18, 24, 3],
    [21, 25, 1],
    [22, 26, 1]
  ]
}

const Australia = {
  name: 'Australia',
  origin: [74, 32],
  area: [[4, 0], [7, 1], [15, 7], [13, 9], [0, 6], [0, 2]],
  dots: [
    [4, 0, 1],
    [2, 1, 6],
    [0, 2, 9],
    [0, 3, 10],
    [0, 4, 10],
    [0, 5, 3],
    [5, 5, 5],
    [5, 6, 4],
    [15, 7, 1],
    [14, 8, 1],
    [13, 9, 1]
  ]
}

const Asia = {
  name: 'Asia',
  origin: [52, 1],
  area: [
    [16, 0],
    [38, 5],
    [40, 7],
    [28, 17],
    [24, 25],
    [29, 29],
    [19, 29],
    [11, 24],
    [3, 23],
    [0, 20],
    [0, 19],
    [6, 13],
    [7, 6]
  ],
  dots: [
    [16, 0, 1],
    [17, 1, 2],
    [18, 2, 2],
    [15, 3, 6],
    [28, 3, 1],
    [30, 3, 1],
    [10, 4, 2],
    [13, 4, 10],
    [24, 4, 1],
    [9, 5, 22],
    [32, 5, 1],
    [38, 5, 1],
    [7, 6, 2],
    [10, 6, 1],
    [12, 6, 27],
    [7, 7, 34],
    [7, 8, 31],
    [7, 9, 26],
    [34, 9, 3],
    [7, 10, 22],
    [31, 10, 1],
    [33, 10, 1],
    [7, 11, 21],
    [32, 11, 2],
    [7, 12, 21],
    [32, 12, 1],
    [6, 13, 22],
    [32, 13, 1],
    [6, 14, 22],
    [5, 15, 22],
    [3, 16, 2],
    [6, 16, 20],
    [2, 17, 3],
    [6, 17, 16],
    [24, 17, 1],
    [28, 17, 1],
    [1, 18, 22],
    [26, 18, 2],
    [0, 19, 24],
    [0, 20, 5],
    [6, 20, 17],
    [2, 21, 5],
    [10, 21, 14],
    [2, 22, 5],
    [11, 22, 4],
    [16, 22, 4],
    [3, 23, 3],
    [11, 23, 2],
    [17, 23, 3],
    [23, 23, 1],
    [11, 24, 2],
    [18, 24, 2],
    [23, 24, 1],
    [24, 25, 1],
    [18, 26, 1],
    [22, 26, 1],
    [18, 27, 1],
    [20, 27, 4],
    [18, 28, 1],
    [21, 28, 1],
    [23, 28, 1],
    [26, 28, 3],
    [19, 29, 1],
    [28, 29, 2]
  ]
}

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

console.log(buildContinentState(NorthAmerica))

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
 * Deconstructs an svg string into an array of coordinates.
 * @param {Object} continent Continent to work with. Given by Grommet.
 * @returns An array of coordinates, corresponding to each dot on the map of the continent.
 */
export const deconstructContinentState = continent => {
  // Full string as an svg path.
  return buildContinentState(continent)
    .split(' ')
    .filter(element => filterPredicate('h0', element))
    .map(element => element.replace('M', ''))
    .map(element => {
      const splitUp = element.split(',')
      return [parseInt(splitUp[0]), parseInt(splitUp[1])]
    })
    .reduce((result, element, i, arr) => {
      if (element[1] === 0) {
        // This is a dot that needs to be added manually
        let numberOfManualDots = 0
        // Count how many dots need to be created manually before the next real dot
        // 100 is just an arbitrary number larger than any number of manual dots you'll ever encounter
        for (let k = 0; k < 100; k++) {
          if (arr[i + k][1] === 0) {
            numberOfManualDots++
          } else {
            // Once you encounter an array that is a true dot, stop incrementing the number of manual dots.
            break
          }
        }

        // Now that we know how many dots need to be added manually,
        // create an array for each one
        for (let l = 1; l < numberOfManualDots + 1; l++) {
          // The last true dot in this row\
          const baseDot = arr[i - 1]

          // Make a new array where the first element is the base dot's first element plus 10
          const newDotArray = [baseDot[0] + l * 10, baseDot[1]]
          result.push(newDotArray)
        }
      } else {
        result.push(element)
      }
      return result
    }, [])
    .filter(element => filterPredicate(0, element, 1))
    .map(element => {
      const x = element[0] / FACTOR
      const y = element[1] / FACTOR
      return coordToLatLon([x, y], origin, extent)
    })
}

console.log(deconstructContinentState(Australia))
