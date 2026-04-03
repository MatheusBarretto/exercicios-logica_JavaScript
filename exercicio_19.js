/*
    Faça um Programa que peça dois números e imprima o maior deles.
*/

const primeiro_numero = Number(prompt('Digite o primeiro número'))
const segundo_numero = Number(prompt('Digite o segundo número'))
let maior_numero = 0

if (primeiro_numero > segundo_numero){
    maior_numero = primeiro_numero
}else{
    maior_numero = segundo_numero
}

alert(`Você digitou os números: ${primeiro_numero} e ${segundo_numero}. O maior entre eles é o ${maior_numero}`)