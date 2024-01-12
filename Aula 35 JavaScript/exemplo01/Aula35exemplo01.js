const cliqueBotao = () => {
    alert ( 'O Botão foi clicado!')
  }
  
  //recuperando o elemento da pagina HTML através do Dom
  const botao = document.getElementById('botao')
  
  //adicionando um ouvinte de evento do tipo "click" ao botão.
  botao.addEventListener('click',() => {
      console.log ('O botão foi clicado (ação execultada pelo ouvinte)')
  })
  
  botao.addEventListener('mouseover', () => { 
      botao.classList.add('verde')
  })
  botao.addEventListener ('mouseout', () => {
      botao.classList.remove('verde')
  })
  
  botao.addEventListener('dblclick', () => {
      const container = document.querySelector('.container')
      container.classList.remove('none')
  
  
  })