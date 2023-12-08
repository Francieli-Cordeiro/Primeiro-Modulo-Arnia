const dasBoasVindas = (nome) => {
    io.write (' olá ${nome}')
}


const receberUsuario = (fnBoasVindas) => {
    io.write ('informe seu nome:')
    const name = io.read()

    fnBoasVindas(nome)
}

receberUsuario(darBoasVindas)
