function addStyleString(str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}

addStyleString(
  '.cover-main img { content: url("https://assets.pernod-ricard.com/uk/media_images/test.jpg") }'
)
// addStyleString('body { background: silver }');
// This way allows you to add CSS in multiple passes

// content: url('https://assets.pernod-ricard.com/uk/media_images/test.jpg');
