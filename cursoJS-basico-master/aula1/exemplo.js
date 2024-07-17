// console.log("olá mundo!");

// let nome = "josé"; //string
// let idade = 30; // number
// let altura = 1.70; // number
// let temGato = true; // boolean

//concatenar
// alert("oi eu sou " + nome + " tudo bem?");
// console.log(`oi eu sou o ${nome} tudo bem? e eu tenho ${idade} anos`)


//contas
// let n1 = 2;
// let n2 = 80.2;

// alert(n1 + n2);


//exercicios
// AREA DE UM TRIANGULO
// criar uma variavel com as informações da base e uma da altura
//variavel base
// let base = Number(prompt("digite a base: "))
//variavel altura
// let altura = Number(prompt("digite a altura: "))
//variavel resultado
// let resultado = (base*altura)/ 2;
// alert("A área do triângulo é "+resultado);


// EXERCICIO SALÁRIO DE FUNCIONARIO
//criar as variaveis com as informações
//variavel de nome
// let nome = prompt("Digite seu nome: ");
// let salario = Number(prompt("Digite o valor do salário: "));
// let montanteDeVendas = Number(prompt(" Digite o valor do montante de venda: "));
// let comissao = montanteDeVendas * 0.15.toFixed(2);
// let salarioFinal = salario + comissao.toFixed(2);

// alert(` ${nome} , seu salário será de = R$  ${salarioFinal}`);


//EXERCICIO DE CALACULO DE MEDIA DE CONSUMO DE UM AUTOMOVEL
//criar variaveis que armazenem dados sobre km percorrido e quantos litros foram gastos
// let kmPercorrido = Number(prompt("Digite quantos KM foram percorridos: ")).toFixed(1);
// let litrosGastos = Number(prompt(" Digite quantos litros foram gastos: ")).toFixed(1);
// let litrosPorKM = kmPercorrido / litrosGastos;

// alert(`Foram gastos ${litrosPorKM.toFixed(3)} Km/L`);

//EXERCICIO HORAS TRABALHADAS
//criar uma variavel onde tenha os dados do valor das horas, a quantidade de horas que foram trabalhadas, e o seu numero
// let numeroFuncionario = Number(prompt("Digite o número do funcionário: "))
// let horasTrabalhadas = Number(prompt("Digite o número de horas trabalhadas: "));
// let valorHora = Number(prompt("Digite o valor que corresponde a hora: "));
// criar uma variavel que faça a quantidade de horas vezes o valor delas
// let calculoSalario = horasTrabalhadas*valorHora.toFixed(2);
// retornar o valor final
// alert(`Número do Funcionário: ${numeroFuncionario}
// Seu salário final corresponde à : R$ ${calculoSalario.toFixed(2)}`)


//CALCULAR MEDIA NOTAS
//criar variaveis com os valores das notas
let n1 = Number(prompt("Digite a primeira nota: "))
let n2 = Number(prompt("Digite a segunda nota: "))
let n3 = Number(prompt("Digite a terceira nota: "))
//dividir todas as notas
let mediaNotas = (n1+n2+n3)/3;
alert(`Sua média é de ${mediaNotas.toFixed(2)}`)