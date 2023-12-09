/*Fatorial de um número natural é a multiplicação dos naturais menores ou
igual a ele. 5! = 5x4x3x2x1. Faça um programa que receba do usuário um
número n calcule seu fatorial (use while)*/

/* rodou*/


const io = require('../io/io')

let numero
let i = 1
let fatorial

io.write('Digite o número: ')
numero = io.readInt()
fatorial = numero

while (i < numero) {
    fatorial = fatorial * i
    i++
}

io.write(fatorial)