/*Faça um programa de computador que recebe do usuário 10 números e
depois imprime os pares e depois os ímpares*/

const io = require('../io/io')

let numero = [] /* array*/
let n



for (let i = 0; i < 10; i++) {
    io.write('Digite o numero')
    n = io.readInt()
    numero.push(n)

}

for (let i = 0; i < 10; i++) {
    if (numero [i]% 2 === 0) {
        io.write(`este e par  ${numero[i]}`)

    } else (io.write(`este e immpar ${numero[i]}`))
}