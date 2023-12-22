/* Escreva uma função chamada somarValores que recebe um
array de números e retorna a soma de todos os valores do array
utilizando a função reduce.*/ 

/* ❖ Exemplo de uso:
const numeros = [1, 2, 3, 4, 5]
const resultado = somarValores(numeros)
console.log(resultado) // Output: 15*/

const io = require('../io/io')

const somarValores = ((numeros) =>{
    return numeros.reduce((acumulador, numero) =>{
        return acumulador + numero
    },0)})
   
    const numeros = [1, 2, 3, 4, 5]
const resultado = somarValores(numeros)
console.log(resultado)
   


