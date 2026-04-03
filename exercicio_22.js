/*
    Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
*/

const letra_digitada = prompt('Digite uma letra').toLocaleUpperCase()
const vogais = ['A', 'E', 'I', 'O', 'U']

//A função includes busca a letra digitada dentro do array e retorna true ou false
let verificacao = vogais.includes(letra_digitada)

if(verificacao == true){
    alert(`A letra "${letra_digitada}" é uma vogal`)
}else{
    alert(`A letra "${letra_digitada}" não é uma vogal`)
}