/* Faça um programa para imprimir os números pares menores
que um número fornecido pelo usuário.*/

/* rodou*/

const io = require('../io/io')

io.write('Escreva um numero')
const numero =io.readInt()

for ( let i = 0; i < numero; i=i+2) {
io.write(i)

}