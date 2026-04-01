/*
    1.Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps)
    2.Calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
*/

const tamanho_arquivo = Number(prompt('Digite o tamanho do arquivo (em MB):'))
const velocidade_internet = Number(prompt('Digite a velocidade da internet: '))
const calculo_tempo = (tamanho_arquivo / (velocidade_internet / 8)) / 60

alert(`O tempo aproximado para esse um arquivo de ${tamanho_arquivo}MB, em uma velocidade de ${velocidade_internet}Mbps é de ${(calculo_tempo).toFixed(2)} Minutos!`)
