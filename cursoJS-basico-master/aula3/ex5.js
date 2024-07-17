//pegar o conteudo dos botões
//fazer uma função diferente para cada botão
//primeiro botão fazer com que ao clicar some mais 5
const botaoAcelerar = document.getElementById('acelerar');


function acelerar(){
    document.getElementById('velocidade').innerHTML= Number(velocidade.innerText)+5
 
}
botaoAcelerar.addEventListener('click',acelerar)

//segundo botão fazer com que a clicar diminua 5
const botaoDesacelerar = document.getElementById('desacelerar');

function desacelerar(){
    document.getElementById('velocidade').innerHTML-=5
    
}
   botaoDesacelerar.addEventListener('click',desacelerar);

// terceiro botão imprimir o nome da nave e mostrar o velocidade atual do foguete
const botaoImprimir = document.getElementById('imprimir');
function imprimir(){
  let nomeNave = document.getElementById('name');
  console.log(nomeNave)
  document.querySelector('#nameNav').innerHTML=" Sua Nave é: "+nomeNave.value 
  nomeNave.classList.toggle('active');
  document.querySelector('#nameNav').classList.

}
   botaoImprimir.addEventListener('click',imprimir);

//esconder o menu

const botaoSair = document.getElementById('sair');
function sair(){
    document.querySelector(".menu").classList.add('sair')
   }
   botaoSair.addEventListener('click',sair)


