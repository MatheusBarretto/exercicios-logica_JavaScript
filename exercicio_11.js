/*
Faça um Programa que:
1.Peça 2 números inteiros e um número real. 
2.Calcule e mostre: 
--> o produto do dobro do primeiro com metade do segundo.
--> a soma do triplo do primeiro com o terceiro. 
--> o terceiro elevado ao cubo.
*/

const primeiroInteiro = Number(prompt('Digite um número inteiro:'))
const segundoInteiro = Number(prompt('Digite outro número inteiro:'))
const numeroReal = Number(prompt('Digite um número real: '))

//produto do dobro do primeiro com metade do segundo
let primeiroCalculo = (primeiroInteiro * 2) + (segundoInteiro / 2)

//soma do triplo do primeiro com o terceiro
let segundoCalculo = primeiroInteiro * 3 + numeroReal

//terceiro elevado ao cubo
let terceiroCalculo = numeroReal**3


alert(`O produto do dobro do primeiro com metade do segundo é: ${primeiroCalculo}
A soma do triplo do primeiro com o terceiro é: ${segundoCalculo}
O terceiro número elevado ao cubo é igual á: ${terceiroCalculo}`)
