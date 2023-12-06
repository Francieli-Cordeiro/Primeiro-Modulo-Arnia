/*Faça uma função que recebe um valor inteiro e verifica se o valor é par.
A função deve retornar um valor booleano (true ou false).*/


const io = require('../io/io')

io.write(" Digite um numero Natural:")
let n = io.readInt()

function divisores(n) {
    if(n > 0){
        io.write(`os divisores de ${n} são:`) {
        }
 for(let c= 1; c <= n; c++){
        if( n % c=== 0){
            io.write(c)
        }

 }

 else{
    io.write("Digite um numero natural valido")
 }
    }

}