// https://stackoverflow.com/questions/15505225/inject-css-stylesheet-as-string-using-javascript

const images = [
  './images/bubonic.svg',
  './images/earthTribe.svg',
  './images/patientZero.svg',
  './images/pneumonic.svg',
  './images/septicemic.svg',
  './images/tradesmen.svg',
  './images/warlords.svg'
]

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
  firstString === secondString ? true : false
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
      console.log('the path was the same as the last path!')
      path = images[Math.floor(Math.random() * images.length)]
    }

    return path
  } else {
    // Make a new path
    let path = images[Math.floor(Math.random() * images.length)]

    return path
  }
}

// If the browser supports localStorage
if (typeof Storage !== 'undefined') {
  // Get a path to a random image
  // Garunteed not to be an image the user saw most recently.
  const path = getRandomPath(images, localStorage.getItem('lastPath'))
  addStyleString(`.cover-main img { content: url(${path}) }`)
}
