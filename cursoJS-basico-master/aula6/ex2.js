
function somar(){
    let valor1 = Number(document.querySelector('.valor1').value);
    let valor2 = Number(document.querySelector('.valor2').value);
  
    document.querySelector('.resposta').innerHTML = `O valor total é ${valor1 + valor2}`
   
 }