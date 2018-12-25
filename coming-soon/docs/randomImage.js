// https://stackoverflow.com/questions/15505225/inject-css-stylesheet-as-string-using-javascript

// Array of Images to choose from
const images = [
  './images/bubonic.svg',
  './images/earthTribe.svg',
  './images/patientZero.svg',
  './images/pneumonic.svg',
  './images/septicemic.svg',
  './images/tradesmen.svg',
  './images/warlords.svg'
]

/**
 * Creates a node, adds a style to it from a provided string, and appends that node to the body of the document.
 * @param {String} str String of style to set, complete with selector.
 */
function addStyleString(str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}

/**
 * Tests whether or not 2 strings are equal to each other.
 * @param {String} firstString First string to test.
 * @param {String} secondString Second string to test.
 * @returns {Boolean} Returns true if the strings are the same, and false otherwise.
 */
function isTheSame(firstString, secondString) {
  return firstString === secondString ? true : false
}

/**
 * Ensures that a new image is returned to the user.
 * @param {Array} images An array of images to choose from.
 * @param {String | Undefined} lastPath If defined, the path to the image that was most recently shown to the user. Otherwise, undefined.
 * @returns {String} A string gaurunteed not to be the same path to the image the user saw most recently.
 */
function getRandomPath(images, lastPath) {
  // If the user saw an image last time, i.e.
  // the lastPath has been set in localStorage
  if (lastPath) {
    // Make a new path
    let path = images[Math.floor(Math.random() * images.length)]

    // If the path was the same as the lastPath
    while (isTheSame(path, lastPath)) {
      path = images[Math.floor(Math.random() * images.length)]
    }

    localStorage.setItem('lastPath', path)

    return path
  } else {
    // Make a new path
    let path = images[Math.floor(Math.random() * images.length)]

    localStorage.setItem('lastPath', path)

    return path
  }
}

// If the browser supports localStorage
if (typeof Storage !== 'undefined') {
  // Get a path to a random image
  // Garunteed not to be an image the user saw most recently.
  const path = getRandomPath(images, localStorage.getItem('lastPath'))
  addStyleString(`.cover-main img { content: url(${path}) }`)
} else {
  // No garuntee that the path won't be the same as the lastPath.
  const path = images[Math.floor(Math.random() * images.length)]
  addStyleString(`.cover-main img { content: url(${path}) }`)
}
