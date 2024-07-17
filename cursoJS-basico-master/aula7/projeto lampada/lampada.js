// function on(){
// document.querySelector('#lamp').src = "/cursoJS-basico-master/aula7/projeto lampada/imagens/acessa.png"
// }

// function off(){
//     document.querySelector('#lamp').src = "/cursoJS-basico-master/aula7/projeto lampada/imagens/desligada.png"
// }

function toggleImage(fileName, personagemName){
    document.querySelector('#personagem').setAttribute('src',"/cursoJS-basico-master/aula7/projeto lampada/imagens/" +fileName)
    document.querySelector('#personagem').setAttribute('data-personagem',personagemName)
}


// function para pegar img

function pegarPersonagem(){
    let personagem = document.querySelector("#personagem").getAttribute('data-personagem')
    alert("O seu personagem é: "+personagem)
}