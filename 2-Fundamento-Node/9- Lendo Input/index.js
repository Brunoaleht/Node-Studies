
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual é sua linguagem de programação preferida? ',(linguagem) => {
    if (linguagem === "python"){
        console.log('Isso nem é linguagem')
    }else{console.log(`A sua linguagem preferida é ${linguagem}`)}
    readline.close()
})

