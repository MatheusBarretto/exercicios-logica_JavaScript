/*
Faça um Programa que: 
1.Pergunte quanto você ganha por hora
2.Pergunte o número de horas trabalhadas no mês.
3.Calcule e mostre o total do seu salário no referido mês.

Sabendo-se que são descontados:
--> 11% para o Imposto de Renda
--> 8% para o INSS
--> 5% para o sindicato, 

Faça um programa que nos dê: 
--> Salário bruto.
--> Quanto pagou ao INSS
--> Quanto pagou ao sindicato. 
--> O salário líquido. 

Calcule os descontos e o salário líquido, conforme a tabela abaixo:
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$

Obs.: Salário Bruto - Descontos = Salário Líquido.
*/

const valorPorHora = Number(prompt('Quanto você recebe com hora?'))
const horasTrabalhadas = Number(prompt('Quantas horas você trabalhou no mês?'))

let salarioBruto = valorPorHora*horasTrabalhadas
let calculoIR = salarioBruto*0.11
let calculoINSS = salarioBruto*0.08
let calculoSindicado = salarioBruto*0.05
let salarioLiquido = salarioBruto - calculoIR - calculoINSS - calculoSindicado

alert(`O seu salário BRUTO mensal, totalizou: R$${salarioBruto.toFixed(2)}
Será descontado os seguintes valores:
- IR (11%) : R$${calculoIR.toFixed(2)}
- INSS (8%) : R$${calculoINSS.toFixed(2)}
- Sindicato ( 5%) : R$${calculoSindicado.toFixed(2)}

Seu salário LIQUIDO será de: R$${salarioLiquido.toFixed(2)}`)
