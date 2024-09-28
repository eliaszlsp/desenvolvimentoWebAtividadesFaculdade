const elementoHtml = document.getElementById("elemento");

/* Crie um programa que simula um sistema de segurança de um banco. O sistema deve permitir a 
entrada apenas se o usuário apresentar um nome válido e
 fornecer a senha correta. Use a tabela verdade para representar todas as combinações possíveis dessas 
 condições e determine se o acesso deve ser permitido ou não. */

let answer;

const { userName, password } = {
  userName: "eliaszlsp",
  password: "1234",
};
let nameTyped = "eliaszlsp";
let passwordTyped = "1234";

if (userName === nameTyped && password === passwordTyped) {
  answer = "logado";
} else {
  answer = "acesso negado";
}

elementoHtml.innerHTML = answer;
