//FUNÇÃO COM PARAMÊTROS

// function comidas(cafe,pQueijo){
//     let totalItens = cafe + pQueijo;
//     console.log('Novo preço: '+ totalItens.toFixed(2))
// }

// comidas(4.00,6.00)

//FUNÇÃO COM RETORNO
function soma(x,y){
    return x+y
}
console.log(soma(10,10))

//FUNÇÃO ANÔNIMA
let som = function(x,y) {return x+y}
console.log(som(10,20));
//ARROW FUNCTION
let somar = (x,y) => x + y
console.log(somar(10,15))


//length
const letras = nome => nome.length
console.log(letras("julia"))