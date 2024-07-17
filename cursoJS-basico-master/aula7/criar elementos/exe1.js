
//COM O MOUSE
//Adicionar o evento de click ao botão e fazer com que acrescente um conteudo a baixo dele
document.querySelector('button').addEventListener('click', () =>{
    //pegar o input e os valores dele (value)
    let input = document.querySelector('input').value
    //criar um elemento de paragrafo
    const paragrafo = document.createElement('p')
    //adicionar no paragrafo criado  o conteudo de input
    paragrafo.innerHTML = input
    //associando o novo elemento P ao body
    document.body.appendChild(paragrafo)
    //para limpar o campo
    document.querySelector('input').value = '';
})

const enviarNome = document.querySelector('input')

enviarNome.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
    //pegando o input
    const campo = document.querySelector('input')
    //pegando o valor de input
    const nome = campo.value
    //limpando o campo
    campo.value = ""
    //criando elemento p
    const nomeUsuario = document.createElement('p')
    //pegar o elemento e colocar o texto da variavel nome
    nomeUsuario.innerText = nome
    document.body.appendChild(nomeUsuario)
    }
   
})