import inquirer from 'inquirer'

inquirer.prompt([{
    name: 'nota1',
    message: 'Quanto foi a sua primeira nota?'
},{
    name: 'nota2',
    message:'Quanto foi a sua segunda nota?'
}
]).then((answers) =>{
    console.log(answers)
    const media = ((parseInt(answers.nota1) + parseInt(answers.nota2)) /2 )
    console.log(`A sua media foi: ${media}`)
    if (media < 7){
        console.log('Você está reprovado')
    }else{
        console.log('Você foi aprovado por média')
    }
    
}).catch((err)=>console.log(err))