/* function primeira (segunda){
    const nome = prompt ("Qual o seu nome")
    segunda(nome)
}
primeira (function(nomerecebido){
    alert(`o seu nome é ${nomerecebido}`)
}) */
/* const pessoa = function (nome) {
    const getNome = function(){
        return nome;
    };
    return getNome;

}
const aluno = pessoa("gabriel")
const resultado = aluno ();
console.log (pessoa, "aqui")
 */

const resultado = document.getElementById("resultado");

let numero1 = 50;
for (let index = 0; index <= numero1; index++) {
  console.log(index);
}

resultado.innerHTML = "Gabriel";
