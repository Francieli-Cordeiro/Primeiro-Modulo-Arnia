/* Faça um programa para receber dados de 10 pessoas (nome, idade e
    documento) criando um objeto para cada pessoa. Depois mostrar as que são
    maiores de idade (use o método de array .filter() para filtrar).*/

    const io = require('../io/io') /* chamei a biblioteca*/

    let alunos = []

    for( let i= 0; i < 10; i++){

        io.write(`Digite o ${i + 1} nome`)
        const nome = io.read()
        io.write(`Digite o ${i + 1} idade`)
        const idade = io.read()
        io.write(`Digite o ${i + 1} doc`)
        const doc = io.read()
    }

    const alunos1= alunos.map((aluno) => {
        aluno.nota = aluno.nota + 1
        return aluno
        const obj = {
            nome,
            idade,
            doc,
        }

        pessoa.push(obj)
        io.write(pessoa)