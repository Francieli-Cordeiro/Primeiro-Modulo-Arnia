/*Array de objetos*/

/* Exemplo para colocar vários objetos no array*/

const alunos = []
for (let i = 0; i < 3; i++){
io.write("Digite um nome para o Aluno:")
const nome = io.read()
io.write("Digite uma nota para o Aluno:")
const nota = io.read()
const aluno = {
id: 1,
nome,
nota
/* quando o atributo e a variável tem o mesmo nome, não é necessário
escrever os dois*/

}
alunos.push(aluno)
}
console.log(alunos)

/* não rodou falta por o objeto []
/* erro = requireStack: []*/


