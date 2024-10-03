let formulario = document.getElementById("form-resultado")
let resultado = document.getElementById("resultado")

;

 
formulario.addEventListener("submit", function(event)  {
    event.preventDefault()
    const numero1 = document.getElementById("numero1").value
    const numero2 = document.getElementById("numero2").value
     let soma = Number(numero1) +  Number(numero2)        
     resultado.innerHTML = soma    
})

