/*
    Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
    Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

const periodo = prompt('Qual periodo você estuda? M = Matutino, V = Vespertino, N = Noturno').toUpperCase()


if (periodo == 'M'){
    alert('Bom Dia !')
}else if (periodo == 'V'){
    alert('Boa Tarde!')
}else if (periodo == 'N'){
    alert('Boa Noite!')
}else{
    alert('Valor Inválido!')
}