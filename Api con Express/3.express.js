const express = require('express')
const app = express()
// const http = require('http')
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  // res.status(200).send('<h1>Hola mundo con Express</h1>')
  res.json({ message: 'Hola mundo con Express' })
})
app.post('/contacto', (req, res) => {
  let body = ''
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  req.on('end', () => {
    res.json({ message: 'Sus datos para el contacto han sido recibidos', data: JSON.parse(body) })
  })
})
app.use((req, res) => {
  res.status(404).json({ message: 'No se ha encontrado la ruta' })
})
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
