/*Faça um programa de computador para escrever a raiz quadrada de um
número que o usuário fornecer*/

/* rodou*/

const io = require('../io/io')

io.write('Forneça o numero:')
const numero = io.readInt()

io.write('resultado')
const raiz = Math.sqrt(numero)

io.write (raiz)



