/*Faça um programa para escrever seu nome n vezes, sendo n
fornecido pelo usuário*/

const io = require('../io/io')

io.write('Defina a quantidade de repetição')
const repetição = io.readInt()

for(let i = 0; i < repetição; i++){
    io.write("Francieli Cordeiro")
}
