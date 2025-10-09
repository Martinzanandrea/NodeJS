const fs= require('node:fs')//sistema de archivos.
const stats= fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),// si es fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, //tamaño en bytes.
)