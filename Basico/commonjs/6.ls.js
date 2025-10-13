const fs = require('node:fs')
// . representa la carpeta o directorio actual.
fs.readdir('.', (error, files) => {
  if (error) {
    console.error('Error al leer el directorio: ', error)
  }

  files.forEach(file => {
    console.log(file)
  })
})
