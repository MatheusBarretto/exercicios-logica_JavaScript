/*
Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, 
que depende do salário bruto (conforme tabela abaixo) e 10% para o INSS e que o FGTS corresponde a 11% do Salário Bruto, 
mas não é descontado (é a empresa que deposita).

O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

Desconto do IR: 
Salário Bruto até 900 (inclusive) - isento 
Salário Bruto até 1500 (inclusive) - desconto de 5% 
Salário Bruto até 2500 (inclusive) - desconto de 10% 
Salário Bruto acima de 2500 - desconto de 20%

Imprima na tela as informações, dispostas conforme o exemplo abaixo. 
No exemplo o valor da hora é 5 e a quantidade de hora é 220.

    Salário Bruto: (5 * 220)        : R$ 1100,00
    (-) IR (5%)                     : R$   55,00
    (-) INSS ( 10%)                 : R$  110,00
    FGTS (11%)                      : R$  121,00
    Total de descontos              : R$  165,00
    Salário Liquido                 : R$  935,00

*/

const valor_hora = parseFloat(prompt('Qual é o valor da sua hora trabalhada?'))
const horas_trabalhadas = parseFloat(prompt('Quantas horas trabalhou no mes?'))

const salario_bruto = valor_hora * horas_trabalhadas
let desconto_ir = 0
let desconto_inss = salario_bruto * 0.10
let valor_fgts = salario_bruto * 0.11
let porcentagem_desconto = 0


if(salario_bruto > 900 && salario_bruto <= 1500){
    desconto_ir = salario_bruto * 0.05
    porcentagem_desconto = 5
}else if(salario_bruto > 1500 && salario_bruto <= 2500){
    desconto_ir = salario_bruto * 0.10
    porcentagem_desconto = 10
}else if(salario_bruto > 2500){
    desconto_ir = salario_bruto * 0.20
    porcentagem_desconto = 20
}

alert(`Salário Bruto:                  : R$ ${salario_bruto}
(-) IR (${porcentagem_desconto}%)                            : R$ ${desconto_ir}
(-) INSS ( 10%)                        : R$ ${desconto_inss}
FGTS (11%)                             : R$ ${valor_fgts}
Total de descontos                     : R$ ${desconto_ir + desconto_inss}
Salário Liquido                        : R$ ${salario_bruto - (desconto_inss+desconto_ir)}`)

