let numbers = [4,20,16,100]

// ??FOR IN
// mostra qual é a posição de cada elemento
for (posicao in numbers){
    console.log(`o valor ${numbers[posicao]} está na posição ${posicao}`)
}

//FOR OF
//mostra todos os elementos (valor)

for (posicao of numbers){
    console.log(`o valor é ${numbers}`)
}

//DATAS COM JS
const data = new Date()

console.log(data.getDay()) //dia
console.log(data.getDate())//dia, mês e ano
console.log(data.getMonth())//mês iniciado janeiro como 0 tendo 11 meses o ano
console.log(data.getFullYear())// ano



//DESESTRUTURAÇÃO

const pessoa = {
    nome : "Felipe",
    idade: 16,
}
console.log(pessoa)

//DESESTRUTURAR
// const nome = pessoa.nome;
// const idade = pessoa.idade;
// console.log(nome)

//ALTERANDO O NOME DA PROPRIEDADE

// const {idade: age} = pessoa
// console.log(age)


//DESESTRUTURANDO ARRAYS

// const frutas = ['banana', 'melancia', 'abacaxi','laranja']
// const [,,item3,] = frutas
// console.log(frutas)

//DESESTRUTURANDO FUNÇÕES

const frutas = {
    f1: 'banana',
    f2 : 'pitaya',
    f3 : 'uva',
}


function liquidificar({f1}){
    console.log(f1)
}

liquidificar(frutas)
