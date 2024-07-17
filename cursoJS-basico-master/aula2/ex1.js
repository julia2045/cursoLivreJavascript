//EXERCICIO SOBRE CRIME 0 e 1
//criar variaveis com perguntas
// let p1 =Number(prompt("Telefonou para a vítima? \n 0-não \n 1-sim  "))
// let p2 = Number(prompt("Esteve no local do crime? \n 0-não \n 1-sim "))
// let p3 = Number(prompt("Mora perto da vítima? \n 0-não  \n 1-sim "))
// let p4 = Number(prompt("Devia para a vítima? \n 0-não \n 1-sim "))
// let p5 = Number(prompt("Já trabalhou com a vítima? \n 0-não \n 1-sim"))
// let somaP= p1+p2+p3+p4+p5
// if(somaP==2){
//     alert("Suspeita")
// }
// else if(somaP==3 || somaP ==4){
//     alert("Cúmplice")
// }
// else if (somaP==5 ){
//     alert("Assasino")
// }
// else{
//     alert("Inocente")
// }


//EXERCICIO COM SIM OU NÃO
let positivos = 0
let texto



let telefonou = prompt("Telefonou para a vitima ? ").toUpperCase()

if(telefonou == "SIM"){

    positivos+=1
    //positivo = positivo+1
}

let crime = prompt("Esteve no local do crime?").toUpperCase()

if(crime == "SIM"){
    positivos+=1
}

let mora = prompt("Mora perto da vitima?").toUpperCase()
if(mora == "SIM"){
    positivos+=1
}

let devia = prompt("Devia para a vitima?").toUpperCase()
if(devia == "SIM"){
    positivos+=1
}

let trabalhou = prompt("Trabalhou para a vitima?").toUpperCase()
if(trabalhou == "SIM"){
    positivos+=1
}

if (positivos < 2){
    alert("Inocente")
} else if(positivos == 2){
    alert("Suspeito")
}else if(positivos < 5){
    alert("Cumplice")
} else{
    alert("Assasino")
}