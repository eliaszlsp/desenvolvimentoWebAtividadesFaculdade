const elementoHtml = document.getElementById("elemento");

/* Desenvolva um programa que verifica se um aluno foi aprovado em uma disciplina com base em duas condições: nota mínima de 7.0 e com faltas até 20. 
Use a tabela verdade para representar todas as combinações possíveis dessas condições e determine se o aluno foi aprovado ou não. */

let alunoNota = 7;
let alunoFaltas = 20;

if (alunoNota >= 7.0 && alunoFaltas <= 20) {
  elementoHtml.innerHTML = "Aprovado";
} else {
  elementoHtml.innerHTML = "Reprovado";
}

/*  elementoHtml.innerHTML = aprovado ? "Aprovado" : "Reprovado"; */

/* switch (true) {
  case (alunoNota >= 7.0 && alunoFaltas <= 20):
    elementoHtml.innerHTML = "Aprovado";
    break;
  default:
    elementoHtml.innerHTML = "Reprovado";
    break;
} */
