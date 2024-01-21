const getPosts = async () => { 
         // 1º buscar posts na API
        const requisicao = await fetch ('http://localhost:3000/posts')
        const posts = await requisicao.json()
        console.log(posts)
       
        return posts 
}

const mostraPosts = (posts) => {
      // 2º mostrar os postes na pagina HTML
    const postsDiv = document.querySelector(' .posts')
    
posts.forEach(post => {
    postsDiv.innerHTML = postsDiv.innerHTML + `<div>${post.id} - ${post.titulo}</div>`

})
}

const carregarDados = async () => {
// 1º buscar posts na API
   const postagens =  await getPosts()
// 2º mostrar os postes na pagina HTML

mostraPosts(postagens)
}

carregarDados() 
