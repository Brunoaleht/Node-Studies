//mais de uma valor
const x = 5
const y = 10
const z = 'Bruno'

console.log(x, y, z)

//contagem de impressão
//muito usado para lopps
console.count(`O valor de x: ${x}, contagem`)
console.count(`O valor de x: ${x}, contagem`)
console.count(`O valor de x: ${x}, contagem`)

//Interpolar strings

console.log("O meu nome é %s",z)

//Limpando o console depois de um determinado tempo

setTimeout(() => {
    console.clear()
},3000)