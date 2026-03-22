/*
João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o 
rendimento diário de seu trabalho.

Toda vez que ele traz um peso de peixes maior que o estabelecido 
pelo regulamento de pesca do estado de São Paulo (50 quilos) 
deve pagar uma multa de R$ 4,00 por quilo excedente.

João precisa que você faça um programa que: 
    1.Leia a variável peso (peso de peixes)
    2.Calcule o excesso.
    3.Gravar na variável excesso a quantidade de quilos além do limite
    4.Gravar na variável multa o valor da multa que João deverá pagar. 
    5.Imprima os dados do programa com as mensagens adequadas.
*/

const peso = Number(prompt('João trouxe quantos kilos de peixe?'))
if (peso > 50){
    let excesso = peso - 50 
    let multa = excesso * 4

    alert(`Você excedeu ${excesso} Kg do total permitido (50Kg) e deverá pagar uma multa de R$4,00 por kg excedido.`)
    alert(`Pelo total de kilos excedidos, você deverá pagar R$${multa.toFixed(2)}`)
}else{
    alert('Você não excedeu o limite estabelecido (50kg)')
}