/*
    As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
    Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 280,00 (incluindo): aumento de 20%
    salários entre R$ 280,00 e R$ 700,00: aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
    salários de R$ 1500,00 em diante: aumento de 5% Após o aumento ser realizado,

    informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salario_atual = parseFloat(prompt('Valor do salário a ser ajustado'))

let percentual_aumento = 0
let valor_reajuste = 0
let novo_salaario = 0

if(salario_atual <= 280){
    percentual_aumento = 20
    novo_salario = salario_atual + salario_atual * 0.20
    valor_reajuste = salario_atual * 0.20
}else if(salario_atual > 280 && salario_atual <= 700){
    percentual_aumento = 15
    novo_salario = salario_atual + salario_atual * 0.15
    valor_reajuste = salario_atual * 0.15
}else if (salario_atual > 700 && salario_atual <= 1500){
    percentual_aumento = 10
    novo_salario = salario_atual + salario_atual * 0.10
    valor_reajuste = salario_atual * 0.10
}else{
    percentual_aumento = 5
    novo_salario = salario_atual + salario_atual * 0.05
    valor_reajuste = salario_atual * 0.05
}



alert(`Salário antes do reajuste: R$${(salario_atual).toFixed(2)}
O percentual aumentado foi de: ${percentual_aumento}%
O valor do aumento foi de: R$${(valor_reajuste.toFixed(2))}
Seu novo salário é: R$${(novo_salario).toFixed(2)}`)
