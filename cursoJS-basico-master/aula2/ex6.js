let numLivros = Number(prompt("Digite o número de livros comprados: "))
let precoVarejo = numLivros*12
let precoAtacado = numLivros*8
if(numLivros<=10){
    alert("O Valor total é de R$ "+precoVarejo.toFixed(2))
}else{
    alert("O Valor total é de R$ "+precoAtacado.toFixed(2))
}