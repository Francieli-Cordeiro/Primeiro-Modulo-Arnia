/* codigos especificos para API da Marvel */
const timestamp = (new Date()).getTime()
const publicKey = '0f28c62c0a5adec83e44bf897533c2d5'
const privateKey = '0542ac625fea5cb9fe87cfa23c38da21a99cf807'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const buscarPersonagens = async () => {
    //requisição HTTP - MetodO GET Padrão !! //


 //BUSCA OS DADOS ==> 
    try {  const respostaHttp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
console.log(respostaHttp) 
// CONVERTE OS DADOS ==> 
const resposta = await respostaHttp.json()
console.log(resposta) 

//RENDERIAZANDO OS DADOS NA TELA = (MOSTRAR)//
const divPersonagens = document.querySelector('.personagens')
const personagens = resposta.data.results //caminho////RECUPERA OS DADOS 

//PASSA PELOS DADOS E
personagens.forEach(personagem => {
    divPersonagens.innerHTML = divPersonagens.innerHTML + 
    ` <div>${personagem.id} - ${personagem.name}</div>`
    
})
    } catch(error) {
    console.log ('Erro:', error)
}
}

buscarPersonagens()


