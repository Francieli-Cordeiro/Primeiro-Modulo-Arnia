/* Faça um programa para pedir 10 nomes de pessoas ao
usuário e acusar quantas se chamam “Maria” */

/* rodou*/


const io = require('../io/io')

let cont = 0

for(let i = 1 ; i < 10; i++){
    io.write("Digite um nome")
    const nome = io.read()
    if(nome==='Maria'){
        cont++
}
}

io.write(`O numero de pessoas que se chama Maria é: ${cont}`)
