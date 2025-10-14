const http = require('node:http')

const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234// Puerto por defecto 1234

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Bienvenido a mi servidor con Node.js</h1>, <p>Mi primer servidor con Node.js sin Express</p>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Contacto</h1>, <p>Puedes contactarnos a través de este formulario</p>')
  } else if (req.url === '/montania') {
    res.statusCode = 200 // OK
    fs.readFile('./beautiful-mountains-landscape.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500 // Internal Server Error
        res.end('internal server error')
      } else {
        res.statusCode = 200 // OK
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404 // Not Found
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Error 404</h1>, <p>Página no encontrada</p>')
  }
}
// processRequest
const server = http.createServer(processRequest)
server.listen(desiredPort, () => {
  console.log('Server listening on port ' + desiredPort)
})

// node --watch sirve para reiniciar el servidor automaticamente cuando se hacen cambios en el codigo.
// nodemon sirve para reiniciar el servidor automaticamente cuando se hacen cambios en el codigo.
