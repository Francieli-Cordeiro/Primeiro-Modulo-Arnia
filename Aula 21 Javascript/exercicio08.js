/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit,
calcular e escrever o valor correspondente em graus Celsius (baseado na
fórmula abaixo):*/

/* rodou*/

const io = require('../io/io')

let c 
let f

io.write("Insira a temperatura em Fahrenheit:")
f = io.readFloat()

c = ((f - 32) / 9) * 5

io.write("A temperatura em Celsius é: " + c)