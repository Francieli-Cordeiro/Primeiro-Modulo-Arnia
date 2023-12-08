/* Faça um programa de computador que receba do usuário 2 números e
acuse qual é o maior*/ 

const io = require('../io/io')

io.write('Informe o primeiro numero')
const numero1 = io.readInt()

io.write('Informe o primerio numero')
const numero2 = io.readInt()

if (numero1 > numero2){
    io.write (`O numero ${numero1} e maior que ${numero2}´`)
}
else {
    io.write (`O numero ${numero1} e menor que ${numero2}´`)
}