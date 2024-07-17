const paragrafo = document.createElement('p')
//cria uma tag
paragrafo.innerText = "Esse é um paragráfo"
//Preenchendo a tag com texto
document.body.appendChild(paragrafo)
//anexa ao elemento pai 
document.body.removeChild(paragrafo)
//remove o anexo do elemento pai