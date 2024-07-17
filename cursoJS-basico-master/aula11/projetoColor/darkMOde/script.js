//pege o conteudo para efetuar o click
// mude a imagem atraves de setAtributte

   
//     document.querySelector('.toggleMode').addEventListener('click', () =>{
//         const image= document.querySelector('.toggleMode');
//         if(image.src === "cursoJS-basico-master/aula11/projetoColor/darkMOde/image/lua-cheia.png"){
//             image.setAttribute('src',"cursoJS-basico-master/aula11/projetoColor/darkMOde/image/sol.png")
//             document.querySelector('body').classList.add('layoutDark')
//         }else if(image.src === "cursoJS-basico-master/aula11/projetoColor/darkMOde/image/sol.png"){
//             image.setAttribute('src',"cursoJS-basico-master/aula11/projetoColor/darkMOde/image/lua-cheia.png")
//             document.querySelector('body').classList.remove('layoutDark')
//     }
   
// })



let isRio = true; // Variável para controlar o estado da imagem
 
document.querySelector('.toggleMode').addEventListener('click', () => {
    const image = document.querySelector('.toggleMode');
    
    if (isRio) {
        image.setAttribute('src', "/cursoJS-basico-master/aula11/projetoColor/darkMOde/image/sol.png");
        document.querySelector('body').classList.add('layoutDark');
        isRio = false; // Atualiza o estado da variável
    } else {
        image.setAttribute('src', "/cursoJS-basico-master/aula11/projetoColor/darkMOde/image/lua-cheia.png");
        document.querySelector('body').classList.remove('layoutDark');
        isRio = true; // Atualiza o estado da variável
    }
});