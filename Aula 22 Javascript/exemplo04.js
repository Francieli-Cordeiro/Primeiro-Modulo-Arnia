const io = require('../io/io')

/* Escreva um programa que repita a frase " arnia escola de programação" a quantidade de vezes que o usuario definir.*/


io.write('Defina a quantidade de repetição')
const repetição = io.readInt()

for(let i = 0; i < repetição; i++){
    io.write("arnia escola de programação")
}

