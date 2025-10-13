// Importa el módulo http nativo de Node.js
const http = require('node:http')
// Importa la función para encontrar un puerto disponible
const { findAvaliablePort } = require('./10.free-port.js')

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  // Muestra un mensaje en consola cuando se recibe una petición
  console.log('request received')
  // Responde al cliente con "Hello world"
  res.end('Hello world')
})

// Busca un puerto disponible a partir del 3000 y levanta el servidor en ese puerto
findAvaliablePort(3000).then(port => {
  server.listen(port, () => {
    // Muestra en consola el puerto en el que está escuchando el servidor
    console.log('Server listening on port' + port)
  })
})
