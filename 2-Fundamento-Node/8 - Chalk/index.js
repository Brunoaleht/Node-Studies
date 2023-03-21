import chalk from 'chalk';

const nota = 8
if (nota >= 7){
    console.log(chalk.green('Aprovado'))
}else {
    console.log(chalk.bgRed.black('reprovado'))
}