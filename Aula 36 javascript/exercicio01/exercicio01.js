const timestamp = (new Date()).getTime()
const publicKey = '0f28c62c0a5adec83e44bf897533c2d5'
const privateKey = '0542ac625fea5cb9fe87cfa23c38da21a99cf807'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)
const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise.then((respostaHttp) => respostaHttp.json()).then(resposta => {
        console.log(resposta.data.results)
        const personagens = resposta.data.results
        const conteudo = document.getElementById('content')

        personagens.forEach(personagem => {
            const revista = personagem.comics.items.filter((item,index)=> {
                return index < 2 
            })

            const series = personagem.series.items.filter((item,index)=> {
                return index < 2
            }) 

            let revistasHTML = ''
            let seriesHTML = ''


            revista.forEach(revista => {
                revistasHTML += `<li>${revista.name}</li>`

            series.forEach(serie => {
                 seriesHTML += `<li>${serie.name}</li>`

            })

            conteudo.innerHTML = conteudo.innerHTML +
            
            `
                <div class= "bloco">
                ${personagem.name}   
                    <img class="imagem" src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
                    <p>Revistas: 
                    <ul>${revistasHTML}</ul></p>
                    <p>Séries:
                    <ul>${seriesHTML}</ul></p>


                </div>
            `

        })
    
    })
})