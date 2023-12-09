/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e
o percentual de reajuste. Calcular e escrever o valor do novo salário.*/


const io = require('../io/io')

let salario
let reajuste //70 = 70% / 55 = 55%
let valorReajuste

io.write("Insira o salário:")
salario = io.readInt()
io.write("Insira o percentual de reajuste:")
reajuste = io.readInt()

valorReajuste = salario * reajuste / 100
salario = salario + valorReajuste

io.write("O novo salário é: R$" + salario)
