const io = require('../io/io')

/* ´programa de conputador para escrever um nome, fornecido pelo usuario 10 vezes.*/

for ( let i = 0; i < 10; i++) {
io.write('Escreva seu nome:')
const nome = io.read()

io.write(`o nome informado foi: ${nome}`)
}

