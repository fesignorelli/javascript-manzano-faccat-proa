numero1 = parseFloat(prompt("Digite a nota da primeira verificação (numero1): "));
numero2 = parseFloat(prompt("Digite a nota da segunda verificação (numero2): "));
numero3 = parseFloat(prompt("Digite a nota da terceira verificação (numero3): "));
mediaExercicios = parseFloat(prompt("Digite a média dos exercícios: "));

mediaAproveitamento = (numero1 + numero2 * 2 + numero3 * 3 + mediaExercicios) / 7;

if (mediaAproveitamento >= 9.0) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaAproveitamento >= 6.0) {
    conceito = "C";
} else {
    conceito = "D";
}

alert("A média de aproveitamento do aluno é: " + mediaAproveitamento.toFixed(2) + "\n" +
      "O conceito do aluno é: " + conceito);
