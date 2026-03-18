/* 
Faça um Programa que:
1. peça a temperatura em graus Farenheit
2. transforme em graus Celsius.
    C = (5 * (F-32) / 9)
3. mostre a temperatura em graus Celsius
*/
alert('Convertendo °F(Fahrenheir) em °C (Celcius)')

let grausFahrenheit = Number(prompt('Digite a temperatura em graus °F'))

let grausCelcios = (grausFahrenheit-32) * 5/9

alert(`${grausFahrenheit}°F é ${grausCelcios}°C`)