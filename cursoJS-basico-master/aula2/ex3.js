// exercicio salário
let salAntigo = Number(prompt("Digite o valor do seu antigo salário: "))
let opcao1 = salAntigo*0.15
let opcao2 = salAntigo*0.12
let opcao3 = salAntigo*0.10
let opcao4 = salAntigo*0.7
let opcao5 = salAntigo*0.4
let NovoSal1 = opcao1+salAntigo
let NovoSal2 = opcao2+salAntigo
let NovoSal3 = opcao3+salAntigo
let NovoSal4 = opcao4+salAntigo
let NovoSal5 = opcao5+salAntigo

if(salAntigo >=0 && salAntigo <=400){
    alert("Novo salário: "+(NovoSal1.toFixed(2))+

    "\nReajuste ganho: "+ opcao1.toFixed(2)+
    "\nEm percentual: 15%")

}
else if(salAntigo>400 && salAntigo <= 800){
    alert("Novo salário: "+(NovoSal2.toFixed(2))+
    "\nReajuste ganho: "+ opcao2.toFixed(2)+
    "\nEm percentual: 12%")
}else if(salAntigo>800 && salAntigo <= 1200){
    alert("Novo salário: "+(NovoSal3.toFixed(2))+
    "\nReajuste ganho: "+ opcao3.toFixed(2)+
    "\nEm percentual: 10%")
}
else if(salAntigo>1200 && salAntigo <= 2000){
    alert("Novo salário: "+(NovoSal4.toFixed(2))+
    "\nReajuste ganho: "+ opcao4.toFixed(2)+
    "\nEm percentual: 7%")
}
else{
    alert("Novo salário: "+(NovoSal5.toFixed(2))+

    "\nReajuste ganho: "+ opcao5.toFixed(2)+

    "\nEm percentual: 4%")
}