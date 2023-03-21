const x = '10'

if(!Number.isFinite(x)){
    throw new Error('O valor x não é um número inteiro')
}