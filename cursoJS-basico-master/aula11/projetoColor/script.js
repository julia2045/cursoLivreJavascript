
// Pegar o contéudo do  botao  e adicionaro evento de click
document.querySelector('button').addEventListener('click', () =>{
    //gerar um numero aleatório de 0 a 256 com o math.random e trazer o primeiro inteiro com o match.floor 
    //criar tres constantes pois o rgb é composto por 3 numeros
    const y = Math.floor(Math.random()*256)
    const x = Math.floor(Math.random()*256)
    const z = Math.floor(Math.random()*256)
    //pegar o conteudo que será alterado o background e mudar seu background com o style e adicionar o numero do rgb atraves das conts que fora criadas
    document.querySelector('body').style.backgroundColor = '#' + y + x + z
})