
/* for...in*/

const pessoa = {
    id: 1,
    cpf: "048.956.989-58",
    nome: "Chigo Buarque",
    anoNascimento: 1944
    }
    
    for (const propriedade in pessoa) {
    console.log(`${propriedade}`)
    }
