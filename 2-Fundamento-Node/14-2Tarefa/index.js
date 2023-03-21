import inquirer from "inquirer";
import chalk from "chalk";
inquirer.prompt([{
    name: 'nome',
    message: 'Qual é o seu nome?'
},{
    name: 'idade',
    message: 'Quantos anos vc tem?'
}]).then((answers)=>{
    if (!answers.nome || !answers.idade){
        throw new Error('Nome e a idade são obrigatórios')
    }
    
    console.log(chalk.black.bgYellow(`Seu nome é: ${answers.nome}`))
    console.log(chalk.black.bgYellow(`Seu idade é: ${answers.idade}anos`)) 
}).catch((err) => console.log(err))