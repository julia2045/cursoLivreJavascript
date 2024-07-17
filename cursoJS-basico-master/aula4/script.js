//OBJETO

// let pessoa ={
//     nome: 'Julia',
//     idade: 21,
//     altura: 1.60,
//     temCachorro: true,
// }

// let serie={
//     nome:'3 corpos',
//     ano:2024,
//     temporada: 1,
//     genero: 'ficção',
// }


// console.log(pessoa);
// console.log(serie.nome);

//LISTA EM JS
// let listaCompras = ['detergente', 'macarrão', 'café', 'pão']

// console.log(listaCompras.length);


// //EXERCICIO
// let listaAlunos= [ 'Maria','João','Marizete','Juliana','Rebeca']
// //index 0 pq o array sempre começa com zero
// // index começa no zero e tem que percorrer todo o complemento da lista
// //index++ para agregar a cada elemento
// for(index = 0; index < listaAlunos.length; index++){
//     console.log(`Boas vindas ${listaAlunos[index]}`)
// }



// dados recebidos

// let listaPessoas = ['Marcos', 'Arthur','Renata']
// let index= Number(prompt('Informe o índice: '));
// alert(listaPessoas[index]);



//Soma de numeros nas listas

// let numbers = [1,2,3,4,5];
// let soma =0
// for(index=0; index < numbers.length; index++){
//     soma += numbers[index]
// }

// console.log(soma)

//PAÍS E SEU IDIOMA

//fazer uma lista que contenha os idiomas falados
// let idiomas = ['Português', 'Japonês','espanhol', 'Inglês', 'Francês'];
// let index = Number(prompt('Insira o país: \n 0 - Brasil \n 1- Japão \n 2- Argentina \n 3- Estados Unidos \n 4-França '))
// alert(idiomas[index])

//fazer variaveis para armazenar o conteudo dos países

//fazer com que o index seja o mesmo que o pais com if, se o index for 0 o pais sera brasil e assim por diante


//INVERTER OS NUMEROS
// let numbers= [1,2,3,4,5,6,7,8,9,10];
// numbers.reverse();
// console.log(numbers)


//COM FOR
// for ( i=numbers.length; i >= 0; i--){
//     console.log(numbers[i]);
// }


//Informar o maior numero da lista
// let listNumbers = Number(prompt("Digite os Números a seguir: "))
// let listNumbers = ([1,2,3,4,5,6,7,8,9,10]);
// let maiorNumero = Math.max(...listNumbers)
// console.log(maiorNumero)
 //COM ALERT
// let nums = []
// for(contador = 0; contador < 10;contador++){
//     nums[contador] = prompt('Digite 10 números')
// }
// alert(Math.max(...nums));

//SALARIO for each
//fazer uma lista de salários 
//aplicar 10% somente se o salário for menor que 10%
// let listaSalario = [200.0,300,400,600,700,2000];

// listaSalario.forEach(el => {
// if(el <= 1500){
//    console.log( 'Seu salário é R$ ', ((el*0.10)+el).toFixed(2));
    
// }
// else{
//     console.log('Seu salário é R$ ', el.toFixed(2))
// }
// }) 

//SALARIO FOR
// let salario = [200.0,300,400,600,700,2000];
// let nums = 0
//  for(contador = 0; contador < 10;contador++){
//      nums[contador] = prompt(`Digite o seu ${contador+1}° salário: `);
//      for(i=0; i<salario.length;index++){
//         if(salario[index] < 1500){
//             salario[index]+= salario[index]*0.10
//         }
//      }
//      console.log(salario[index])
//  }


let filmes= [' interestelar', 'filme 2', 'filme 3', 'filme 4']

filmes.push('filmes 5');
// acrescenta o elemento no final:
filmes.pop()
// remove o ultimo elemento
filmes.shift();
//adiciona no primeiro lugar
filmes.unshift();
//remove o primeiro elemento
let acrescenta = filmes.join('.')
//adiciona o elemento e tira da forma de lista para "frase"
console.log(filmes.indexOf('filme 5'))
//mostra o indice do array na lista
 // pega somente o primeiro elemento da palavra
let exemplo = 'senac sad'
let exe2 = exemplo.indexOf('sad')
console.log(exe2)



//METODO MAP
//ele pega cada elemento da lista faz uma ação e faz outra array e configuração
//diferente do for each que separa cada elemento

const nums = [1,2,5,6]
const resultado = nums.map(function(valor){
    return valor*2
})
console.log(resultado);


//METODO FILTER
//filtra toda a lista e passa a informação de acordo com a condição estabelecida
// sempre precisará de duas listas, pois ele pega as informações de uma e da o resultado em outra
const lista = [1,2,5,6]
let lista2 = []
lista2 = lista.filter(function(item){
    if( item > 20){
        return true
    }
    else{
        return false
    }
})
console.log(lista2)