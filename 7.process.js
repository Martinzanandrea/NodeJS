//Process


//Ver los argumentos de entrada:
console.log(process.argv)

//Controlar el proceso y su salida.

//process.exit(1)//1= hubo algun error, 0 estuvo todo bien

//Controlar eventos

process.on('exit',()=>{
    //Limpiar los recursos
})

//donde estamos ejecutando un directorio
console.log(process.cwd())