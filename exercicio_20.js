/*
    Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
*/

const numero  = Number(prompt('Digite um número'))
let verificar_numero = ''

if (numero > 0){
    verificar_numero = 'Positivo'
}else{
    verificar_numero = 'Negativo'
}

alert(`O número ${numero} é ${verificar_numero}!`)