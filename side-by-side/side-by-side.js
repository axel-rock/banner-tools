console.log('hello')

const form = document.querySelector('form'),
  url = new URL(window.location.href),
  params = new URLSearchParams(url.search),
  url1 = params.get('url1'),
  url2 = params.get('url2')

if (url1) {
  document.getElementById('url1_input').value = url1
  createPreview(url1)
}

if (url2) {
  document.getElementById('url2_input').value = url2
  createPreview(url2)
}

function createPreview(url) {
  const dimensions = url.match(/\d+x\d+/)

  if (!dimensions) return console.error('No dimensions found', url)

  const width = +dimensions[0].split('x')[0],
    height = +dimensions[0].split('x')[1]

  const iframe = document.createElement('iframe')
  iframe.width = width
  iframe.height = height
  iframe.src = url
  document.body.appendChild(iframe)
}
