
/* Faça um programa de computador que receba do usuário um ano e
acuse se este ano é ou não bissexto. Veja a regra aqui*/

/* roudou*/


const io = require('../io/io')

let ano

io.write('Digite o ano: ')
ano = io.readInt()

if (ano % 100 === 0 && ano % 400 === 0) {
    io.write('Esse ano é bissexto.')
} else if (ano % 100 !== 0 && ano % 4 === 0) {
    io.write('Esse ano é bissexto.')
} else {
    io.write('Esse ano não é bissexto.')
}