/* Faça um programa de computador que receba do usuário três tamanhos
de segmentos de reta e acuse se estes segmentos formam ou não os
lados de um triângulo. Para formar um triângulo o maior segmento deve
ser menor que a soma dos outros dois. Suponha que o maior lado sempre
será digitado primeiro.*/

const io = require('../io/io')

io.write('Informe o primeiro numero:')
const numero1 = io.readInt()

io.write('Informe o  segundo numero')
const numero2 = io.readInt()

io.write('Informe o  terceiro  numero')
const numero3 = io.readInt()


if (numero1 < numero2 + numero3 && numero2< numero1 + numero3 < numero1 + numero2){
    io.write (`Os numeros ${numero1}, ${numero2}, ${numero3}´ Formam um triangulo`)
}
else {
    io.write (`não é um triangulo`)
}