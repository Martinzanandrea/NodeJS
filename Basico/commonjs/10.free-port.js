const net = require('node:net') // Importa el módulo 'net' de Node.js para trabajar con redes y servidores TCP.

function findAvaliablePort (desiredPort) { // Declara una función que busca un puerto disponible, empezando por el puerto deseado.
  return new Promise((resolve, reject) => { // Devuelve una promesa para manejar la operación de forma asíncrona.
    const server = net.createServer() // Crea un nuevo servidor TCP.
    server.listen(desiredPort, () => { // Intenta escuchar en el puerto deseado.
      const { port } = server.address() // Obtiene el puerto en el que el servidor está escuchando.
      server.close(() => { // Cierra el servidor después de encontrar el puerto disponible.
        resolve(port) // Resuelve la promesa con el puerto encontrado.
      })
    })
    server.on('error', (err) => { // Si ocurre un error al intentar escuchar en el puerto...
      if (err.code === 'EADDRINUSE') { // Si el error es porque el puerto está en uso...
        findAvaliablePort(0).then(port => resolve(port)) // Busca cualquier puerto disponible (0 significa que el SO elige uno libre).
      } else {
        reject(err) // Si es otro error, rechaza la promesa con el error.
      }
    })
  })
}
module.exports = { findAvaliablePort } // Exporta la función para que pueda ser usada en otros archivos.
