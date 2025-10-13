
data=[1,2,3,4,5]

function getData(){
    return new Promise((resolve,reject)=>{
        if(data.length===0){
            reject("No hay datos")
        }
        resolve(data)

    })
}
getData().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.error(err)
})

//const data= await getData()
//console.log(data)