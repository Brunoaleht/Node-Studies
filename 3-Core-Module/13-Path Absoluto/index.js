const path = require('path')
//Path Absoluto
console.log(path.resolve('teste.txt'))

//Formar Path
const midFolter = 'relatorios'
const fileName = 'Bruno1'

const FinalPath = path.join('/','arquivo',midFolter,fileName)

console.log(FinalPath)
