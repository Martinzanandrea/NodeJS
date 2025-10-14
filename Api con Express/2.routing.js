const http = require('node:http')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon':
          res.statusCode = 200 // OK
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify({ name: 'Pikachu', type: 'Electric' }))
          break
        default:
          res.statusCode = 404 // Not Found
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Error 404</h1>, <p>Página no encontrada</p>')
      }
      break
    case 'POST':
      switch (url) {
        case '/crearpokemon':{
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString() // convert Buffer to string
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
            // Otra forma de hacerlo:
            // res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            // res.end(body)
            // Otra forma de hacerlo:
          })
          break
        }
        default:
          res.statusCode = 405 // Method Not Allowed
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>Error 405</h1>, <p>Método no permitido</p>')
          break
      }
      break
    default:
      res.statusCode = 405 // Method Not Allowed
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end('<h1>Error 405</h1>, <p>Método no permitido</p>')
      break
  }
}
const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('Server listening on port 1234')
})
