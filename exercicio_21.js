/*
    Faça um Programa que verifique se uma letra digitada é "F" ou "M". 
    Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
*/

const letra_digitada = prompt('Digite uma letra').toLocaleUpperCase()
let sexo = ''

if(letra_digitada === 'F'){
    sexo = 'F - Feminino'
}else if(letra_digitada === 'M'){
    sexo = 'M - Masculino'
}else{
    sexo = `${letra_digitada} - Sexo Inválido`
}

alert (`Você digitou:
${sexo}`)