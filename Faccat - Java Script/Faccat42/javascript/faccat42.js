const anoAtual = 2024;

let codigoEmpregado = prompt("Digite o código do empregado: ");
let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado: "));
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa: "));

let idade = anoAtual - anoNascimento;
let tempoTrabalho = anoAtual - anoIngresso;

alert("Idade do empregado: " + idade + " anos\n" +
      "Tempo de trabalho do empregado: " + tempoTrabalho + " anos");

if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
    alert("Requerer aposentadoria");
} else {
    alert("Não requerer aposentadoria");
}
