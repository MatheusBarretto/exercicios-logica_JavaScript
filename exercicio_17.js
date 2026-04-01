/* 
Faça um Programa para uma loja de tintas.
1. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
2. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados.
3. A tinta é vendida em latas de 18 litros, que custam R$ 80,00
                        galões de 3,6 litros, que custam R$ 25,00.
4. Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:

A. Comprar apenas latas de 18 litros;
B. Comprar apenas galões de 3,6 litros;
C. Misturar latas e galões, de forma que o preço seja o menor.
D. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.
*/

                                                                     const tamanhoArea = Number(prompt('Quantos metros quadrados tem a área que será pintada?'))
const litrosNecessarios = Math.ceil((tamanhoArea / 6) * 1.10)
const calcularLatas = Math.ceil(litrosNecessarios / 18)
const calcularGalao = Math.ceil(litrosNecessarios / 3.6)

let calcularLatasCusto = Math.floor(litrosNecessarios / 18)
let calcularGalaoCusto = Math.ceil((litrosNecessarios % 18) / 3.6)

if(calcularGalaoCusto > 3){
    calcularLatasCusto += 1
    calcularGalaoCusto = 0
}


alert(`Comprando somente latas:
--> ${calcularLatas} Latas - TOTAL: R$${(calcularLatas*80).toFixed(2)}

Comprando somente galões:
--> ${calcularGalao} Galões - TOTAL: R$${(calcularGalao*25).toFixed(2)}

Melhor custo:
--> ${calcularLatasCusto} Latas - R${(calcularLatasCusto*80).toFixed(2)}
--> ${calcularGalaoCusto} Galoes - R$${(calcularGalaoCusto*25).toFixed(2)}
TOTAL: R${((calcularGalaoCusto*25)+(calcularLatasCusto*80)).toFixed(2)}`)





