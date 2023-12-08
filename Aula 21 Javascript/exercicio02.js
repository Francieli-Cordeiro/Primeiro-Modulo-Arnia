/*Faça um programa de computador que receba do usuário três tamanhos
de segmentos de reta em ordem aleatória e acuse se estes segmentos
formam ou não os lados de um triângulo. Para isso, um lado deve ser
sempre menor que a soma dos outros dois lados.*/


const io = require('../io/io')
let a
let b
let c

io.write('Digite o valor do 1º segmento de reta: ')
a = io.readInt()

io.write('Digite o valor de 2º segmento de reta: ')
b = io.readInt()

io.write('Digite o valor de 3º segmento de reta: ')
c = io.readInt()

if (a + b > c && b + c > a && a + c > b) {
    io.write('Esses segmentos de reta formam um triângulo.')
} else {
    io.write('Esses segmentos de reta não formam um triângulo.')
}
