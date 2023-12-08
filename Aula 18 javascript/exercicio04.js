/* Faça um programa que receba o preço de dois produtos e imprima a
média desses preços*/

/* rodou*/

const io= require('../io/io')

io.write('Digite a nota do primeiro semestre')
const nota1 = io.readInt()

io.write('Digite a nota do segundo semestre')
const nota2 = io.readInt()

const media = (nota1 + nota2) /2

io.write(`A media do aluno é: ${media}`)
