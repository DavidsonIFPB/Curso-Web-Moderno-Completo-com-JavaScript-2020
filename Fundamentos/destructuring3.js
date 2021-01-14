function rand({ min = 0, max = 1000} = {min :0, max: 10 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj ={media:0, min: 100, max:120 }
console.log(rand())
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))