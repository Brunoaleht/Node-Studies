const fs = require('fs')

const arAnt = 'arquivo.txt'
const arNew = 'arquivoNovo.txt'

fs.rename(arAnt,arNew, function(err){
    if(err){
        console.log(err)
    }

    console.log(`O ${arAnt} foi renomeado para ${arNew} agora`)
})
