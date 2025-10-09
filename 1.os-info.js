const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del sistema operativo: ',os.platform())
console.log('Version del sistema operativo: ',os.release())
console.log('CPUs: ',os.cpus())// puede ayudar a escalar proyectos
console.log('Memoria libre: ',os.freemem()/1024/1024)
console.log('Memoria Total: ',os.totalmem()/1024/1024)
console.log('-----------------------------------')
