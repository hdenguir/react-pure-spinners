const { createElement } = require('react')
const { renderToString } = require('react-dom/server')
const { Ripple, Ellipsis, Ring } = require('react-pure-spinners')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000
app.get('*', (req, res) => {
  const rippleHTML = renderToString(createElement(Ripple))
  const ellipsisHTML = renderToString(createElement(Ellipsis))
  const ringHTML = renderToString(createElement(Ring))
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
  </head>
  <body>
        ${ringHTML}
      ${rippleHTML} 
      ${ellipsisHTML} 
  </body>
  </html>`)
})
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
