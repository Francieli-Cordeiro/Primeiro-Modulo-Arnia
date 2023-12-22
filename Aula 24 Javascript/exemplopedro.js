/* faça um programa de computador que recebe 2 numeros e retorna a soma*/

/* let numero1= 10
let numero2 = 20
let resultado = numero1+numero2 */

const io = require ('../io/io')

function somarNumeros (numero1, numero2){ 
const resultado= numero1 + numero2 
return resultado 
}


io.write ("Digite numero")
let n1 = io.readInt()
io.write ("Digite numero")
let n2 = io.readInt()
let resultadoSomar1 = somarNumeros(n1,n2)  
console.log(resultadoSomar1) 





