const fs = require('node:fs')
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt','utf-8',(err,text) => {
    console.log(text)
})//forma asincrona, tercer parametro callback
//const text = fs.readFileSync('./archivo.txt','utf-8')//(archivo,codificacion),forma sincrona

console.log('Hacer otra cosa mientras lee..')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt','utf-8',(err,text) => {
    console.log(text)
})
