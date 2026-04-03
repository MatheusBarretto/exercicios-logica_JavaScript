/*
    Faça um Programa que leia três números e mostre o maior e o menor deles.  
*/

const primeiro_numero = Number(prompt('Digite o primeiro número'))
const segundo_numero = Number(prompt('Digite o segundo número'))
const terceiro_numero = Number(prompt('Digite o terceiro número'))

let maior_numero = ''
let menor_numero = ''

if(primeiro_numero > segundo_numero && primeiro_numero > terceiro_numero){
    maior_numero = primeiro_numero
}else if(segundo_numero > primeiro_numero && segundo_numero > terceiro_numero){
    maior_numero = segundo_numero
}else{
    maior_numero = terceiro_numero
}

if (primeiro_numero < segundo_numero && primeiro_numero < terceiro_numero){
    menor_numero = primeiro_numero
}else if(segundo_numero < primeiro_numero && segundo_numero < terceiro_numero){
    menor_numero = segundo_numero
}else{
    menor_numero = terceiro_numero
}

alert(`Maior número: ${maior_numero}
Menor número: ${menor_numero}`)


teste 
