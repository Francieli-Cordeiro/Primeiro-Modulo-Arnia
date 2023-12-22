/* Faça um programa de computador para receber 10 números inteiros e
depois imprimir seus sucessores.*/

/* rodou*/

const io = require('../io/io')
const nome =[]

for (let i = 0; i <10; i++){
    io.write ('Digite')
    let inf = io.read()
    nome.push(inf)
}

io.write(nome)

