//selecionar o botão 
//adicionar o evento de clique a ele
//dar sua função
//onde ao clicar no botão deve se adicionar uma classe de "active" ao modal para que ela apareça
//e fazer o oposto caso clique no botão de fechar
//para isso relacione o botão com o conteud do modal


function toggleModal(){
   document.querySelector('.modal')
}

const button = document.querySelector('button');
button.addEventListener('click', openModal)
