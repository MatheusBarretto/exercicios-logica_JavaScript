/* Faça um Programa que pergunte:
1. quanto você ganha por hora 
2. número de horas trabalhadas no mês. 
3. Calcule e mostre o total do seu salário no referido mês.
*/


alert('Calculando um salário com base em valor recebido por hora e horas trabalhadas')

let valorPorHora = parseFloat(prompt('Quando você recebe por hora?'))
let horasTrabalhadas = parseFloat(prompt('Quantas horas você trabalhou no mês?'))

let salarioMensal = valorPorHora*horasTrabalhadas
let salarioFormatado = salarioMensal.toFixed(2)

alert(`Com ${horasTrabalhadas} horas trabalhadas e recebendo R$${valorPorHora} por hora, seu salário será de R$${salarioFormatado}`)