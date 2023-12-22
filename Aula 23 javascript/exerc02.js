/*Faça um programa de computador para receber preços de 10 produtos
e depois imprimir os preços que estão acima da média.*/

const io = require('../io/io')

let valor = [] /* array*/ 
let soma = 10




for (let i = 0; i <10; i++){
    io.write ('Digite o preço dos produtos')
    let preço = io.readFloat()
    valor.push(preço)
    soma=soma+preço
}

let média = soma/valor.length /*50*/

for (let i = 0; i <valor.length; i++){
    if ( valor[i]>média) { 
        io.write(`o preço acima da mádia é ${valor[i]}`)
    }
}


