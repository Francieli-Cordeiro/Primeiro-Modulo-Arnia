/* Array de objetos */

//somando as notas
const somaNotas = alunos.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota
    }, 0)