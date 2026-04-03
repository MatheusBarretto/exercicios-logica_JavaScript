/*
    Faça um Programa que leia três números e mostre o maior e o menor deles.  
*/

const primeiro_numero = Number(prompt('Digite o primeiro número'))
const segundo_numero = Number(prompt('Digite o segundo número'))
const terceiro_numero = Number(prompt('Digite o terceiro número'))

let maior_numero = Math.max(primeiro_numero, segundo_numero, terceiro_numero)
let menor_numero = Math.min(primeiro_numero, segundo_numero, terceiro_numero)


alert(`Maior número: ${maior_numero}
Menor número: ${menor_numero}`)

