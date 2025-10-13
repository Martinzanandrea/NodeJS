const path = require('node:path')
//Barra separadora de carpetas segun SO
console.log(path.sep)
//unir rutas con path.join
const filepath = path.join('content','subfolder','test.txt')
console.log(filepath)