  const alertaInicio = () => {
    console.log (`Bem Vindos Alunos Arnia`)
    // window.alert( `Bem Vindo`)

}
 const alertarClique = () => {
console.log (`foi Clicado`)
 }

 const alterarParagrafo =() => {
    const paragrafo = document.getElementById(`first`)
    console.log(paragrafo)
    paragrafo.innerHTML = 'teste'
 }

 const alterarParagrafoDivs = () => {
    const paragrafo = document.getElementById('first')
    paragrafo.innerHTML = `
        <div>
            Div1
        </div>
        <div>
            Div2
        </div> ` 
 }
