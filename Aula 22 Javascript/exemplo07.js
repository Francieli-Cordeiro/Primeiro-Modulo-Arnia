const io = require('../io/io')

/* Faça um programa que recebe 5 salarios e rotorne a soma de todos os salarios */


let somaSalarios = 0

for (let i = 0; i < 5; i++) {
    io.write(`Informe o ${i +1}º salário:`)
    const salario = io.readFloat()

    somaSalarios += salario

}

io.write(`A soma dos salários é: R$ ${somaSalarios}`)