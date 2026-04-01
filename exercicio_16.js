/* 
Faça um programa para uma loja de tintas. 
1. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
2. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
3. A tinta é vendida em latas de 18 litros, que custam R$ 80,00.
4; Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
*/


const tamanhoArea = Number(prompt('Quantos metros quadrados tem a área que será pintada?'))
const litrosNecessarios = tamanhoArea / 3
const latasNecessarias = Math.ceil(litrosNecessarios / 18)


alert(`Para pintar a área de ${tamanhoArea}m², será necessário ${latasNecessarias} lata(s) de tinta e você e você gastará R$${(latasNecessarias*80).toFixed(2)}`)
