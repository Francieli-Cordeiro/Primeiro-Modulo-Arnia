/* Faça um programa de computador que receba do usuário dois números
e imprima o resto da divisão do primeiro pelo segundo*/

/*rodou*/

const io= require('../io/io')

io.write('Forneça o numero')
const numero1 = io.readInt()

io.write('Forneça o numero')
const numero2 = io.readInt()

const diferenca = numero1 - numero2

io.write(`A diferença entre os números é: ${diferenca}`)

