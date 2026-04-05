/*
    Faça um Programa que leia três números e mostre-os em ordem decrescente.
*/

const numeros = []
numeros.push(parseFloat(prompt('Digite o primeiro número')))
numeros.push(parseFloat(prompt('Digite o segundo número')))
numeros.push(parseFloat(prompt('Digite o terceiro número')))

numeros.sort((a, b) => a - b)

alert (numeros)