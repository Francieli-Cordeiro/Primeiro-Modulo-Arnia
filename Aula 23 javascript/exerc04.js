/*Faça um programa de computador para receber 10 nomes de alunos e
suas respectivas notas e depois imprimir as notas e nomes daqueles que
obtiveram notas maiores que 7*/

const io = require('../io/io')

let aluno = [] /* array*/
let nota = [] /* array*/
let nome 
let valor


for (let i = 0; i < 10; i++) {
    io.write(`Digite o nome do ${i+1} aluno`)
    nome = io.read()
    aluno.push(nome) 
    io.write(`Digite a nota do ${i+1} aluno`)
    valor = io.readInt()
    nota.push(valor)
 if(valor > 7 ){
    io.write(" Aluno maior 7") 
    }
    }

