/*
Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que: 
1. calcule seu peso ideal
2. Utilizando as seguintes fórmulas: 
--> Para homens: (72.7h) - 58
--> Para mulheres: (62.1h) - 44.7
*/


let validacao = false

while(validacao == false){
    const altura = Number(prompt('Digite a sua altura: '))
    const genero = prompt('Qual é o seu genero?').toLowerCase()

    if (genero == 'masculino'){
        alert(`Você é um homem com ${altura} de altura e seu peso ideal é: ${72*altura - 58} Kg`)
        validacao =  true
    }else if(genero == 'feminino'){
        alert(`Você é uma mulher com ${altura} de altura e seu peso ideal é: ${62*altura - 44.7} Kg`)
        validacao =  true
    }else{
        alert(`Você digitou um genero inválido. Por favor, responda com "masculino" ou "feminino"`)
    }    
}
