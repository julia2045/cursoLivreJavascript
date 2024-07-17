let anoAtual = Number(prompt("Em que ano estamos?"));
let anoNasc = Number(prompt("Em que ano você nasceu?"));
let idade = anoAtual -anoNasc

alert("Você tem " +idade+ " anos.")

if(idade >= 18){
    alert("Você pode Votar!")
}
else if(idade>=16 && idade <18){
    alert("Seu voto é opcional")
}
else{
    alert("Você Não pode votar")
}

// > maior < menor !=diferente
