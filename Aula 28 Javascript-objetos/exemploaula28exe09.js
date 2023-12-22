/* Array de objetos */

//adicionando 1 ponto a cada aluno
const alunosAtualizados = alunos.map((aluno) => {
    aluno.nota = aluno.nota + 1
    return aluno
    })