/*
    Faça um programa que pergunte o preço de três produtos e 
    informe qual produto você deve comprar, sabendo que a 
    decisão é sempre pelo mais barato.
*/

const produto1 = parseFloat(prompt('Preço do primeiro produto'))
const produto2 = parseFloat(prompt('Preço do segundo produto'))
const produto3 = parseFloat(prompt('Preço do terceiro produto'))

let compar = ''

if (produto1 < produto2 && produto1 < produto3){
    compar = 'produto 1'
}else if (produto2 < produto1 && produto2 < produto3){
    compar = 'produto 2'
}else{
    compar = 'produto 3'
}

alert (`Você deve comprar o "${compar}", pois ele é o mais barato!`)