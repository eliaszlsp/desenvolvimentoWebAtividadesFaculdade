/* let formulario = document.getElementById("form-resultado")


;



formulario.addEventListener("submit", function(event)  {
    event.preventDefault()
    const numero1 = document.getElementById("numero1").value
    const numero2 = document.getElementById("numero2").value
     let soma = Number(numero1) +  Number(numero2)
     let subtrair = Number(numero1) - Number(numero2) 
     let multiplicar = Number(numero1) * Number(numero2)
     let dividir = Number(numero1) / Number(numero2)    
     resultado.innerHTML = soma, subtrair, multiplicar, dividir    
     tv = "fala"          
})
 */
/* function tv () { return "oi" }  */

/*  
console.log(tv, "oi") */
/* 
let resultado = document.getElementById("resultado")
const botaosomar = document.getElementById("somar")
botaosomar.addEventListener("click", () =>{
    const numero1 = document.getElementById("numero1").value
    const numero2 = document.getElementById("numero2").value
    let soma = Number(numero1) +  Number(numero2)
    resultado.innerHTML = soma 

} ) */

let formulario = document.getElementById("form-resultado");

const conta = (numero1, numero2, sinal) => {
  const expressao = `${numero1} ${sinal} ${numero2}`;
  return eval(expressao);
};

const resultado = document.getElementById("resultado");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;
  const sinal = event.submitter.value;
  console.log(numero1);
  resultado.innerHTML = conta(numero1, numero2, sinal);
});
