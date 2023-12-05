/* Faça um programa para receber 10 números do usuário e
acusar qual deles é o maior número */

const io = require( '../io/io')

let MValor = 0

for (let i = 0; i < 10; i++){
    io.write ('escreva um numero')
    const n = io.readInt()

    if (n > MValor){
        MValor = n
    }

}
io.write (MValor)