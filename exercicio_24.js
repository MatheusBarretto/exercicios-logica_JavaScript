/*
    Faça um Programa que leia três números e mostre o maior deles.
*/

const primeiro_numero = Number(prompt('Digite o primeiro número'))
const segundo_numero = Number(prompt('Digite o segundo número'))
const terceiro_numero = Number(prompt('Digite o terceiro número'))

let maior_numero = 0

if(primeiro_numero > segundo_numero && primeiro_numero > terceiro_numero){
    maior_numero = primeiro_numero
}else if(segundo_numero > primeiro_numero && segundo_numero > terceiro_numero){
    maior_numero = segundo_numero
}else{
    maior_numero = terceiro_numero
}

alert(`Maior número = ${maior_numero}`)