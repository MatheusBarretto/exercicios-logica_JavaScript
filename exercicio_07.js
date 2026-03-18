// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

alert('Calculando a área de um quadrado e mostrando o dobro dela para o usuário')

let ladoQuadrado = Number(prompt('Qual é o tamanho do lado do quadrado (em metros)? '))

let areaQuadrado = ladoQuadrado**2

alert(`O quadrado com lado de ${ladoQuadrado} metros, tem ${areaQuadrado} metros de área.
O DOBRO DESSA ÁREA É:  ${areaQuadrado*2} METROS `)
