// https://stackoverflow.com/questions/15505225/inject-css-stylesheet-as-string-using-javascript

function addStyleString(str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}

const images = [
  './images/bubonic.svg',
  './images/earthTribe.svg',
  './images/patientZero.svg',
  './images/pneumonic.svg',
  './images/septicemic.svg',
  './images/tradesmen.svg',
  './images/warlords.svg'
]

let path = images[Math.floor(Math.random() * images.length)]

addStyleString(`.cover-main img { content: url(${path}) }`)

if (typeof Storage !== 'undefined') {
  // // Store current path, so that when the user refreshes, they never get the same image twice in a row
  // localStorage.setItem("lastname", "Smith");
  // // Retrieve
  // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  localStorage.setItem('alex', 'lee');
} else {
  // Sorry! No Web Storage support..
}
