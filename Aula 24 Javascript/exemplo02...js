/* Faça um programa para calcular a média de 3 notas de um determinado aluno.
Este programa deverá conter uma função que recebe as 3 notas de um aluno por
parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética
das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função
deverá retornar o valor da média calculada.*/


const io = require('../io/io')

/* Faça um programa que receba um número. Use uma função para calcular e mostrar este numero x 2 */
function calcularDobro(teste) {
    const resultado = teste * 2
    io.write(resultado)
}

io.write('Digite um numero')
const numero = io.readInt()
calcularDobro(numero)
io.write(resultado)