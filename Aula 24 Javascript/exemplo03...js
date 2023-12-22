/* Faça um programa de computador para simular uma calculadora. Cabe ao
usuário digitar dois valores e um dos operandos a seguir: +, - , *, /). Para cada
operação faça uma função.*/

const io = require('../io/io')

/* Faça um programa que receba um número. Use uma função para calcular e mostrar este numero x 2 */
function calculadora(teste) {
    const resultado = teste * 2
    io.write(resultado)
}

io.write('Digite um numero')
const numero = io.readInt()
calcular(numero)
io.write(resultado)
