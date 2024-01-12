const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault() 

    const codigo = formulario.elements["codigo"].value
    const nome = formulario.elements["nome"].value
    const preco = formulario.elements["preco"].value
    const quantidade = formulario.elements["quantidade"].value
    const categoria = formulario.elements["categoria"].value
    const resultado = preco * quantidade

console.log (codigo,nome,preco,resultado)

    const divResultado = document.querySelector ('.resultado')
    divResultado.innerHTML = `<h2>${codigo}-${nome}</h2>
    <li> Categoria = ${categoria}</li>
        <li> Preço = ${preco}</li>
        <li> Quantidade =${quantidade}</li>
        <li> Resultado = ${resultado} `
})
