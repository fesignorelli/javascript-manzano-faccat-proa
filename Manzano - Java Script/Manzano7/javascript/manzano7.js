function calcularOperacoes() {

    let A = parseInt(prompt("Digite o valor de A: "));
    let B = parseInt(prompt("Digite o valor de B: "));
    let C = parseInt(prompt("Digite o valor de C: "));
    let D = parseInt(prompt("Digite o valor de D: "));

    if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D)) {
        alert("Por favor, insira valores inteiros válidos para A, B, C e D.");
        return;
    }

    let resultados = "Resultados das operações:\n\n";

    resultados += "Adições:\n";
    resultados += `A + B = ${A + B}\n`;
    resultados += `A + C = ${A + C}\n`;
    resultados += `A + D = ${A + D}\n`;
    resultados += `B + C = ${B + C}\n`;
    resultados += `B + D = ${B + D}\n`;
    resultados += `C + D = ${C + D}\n\n`;

    resultados += "Multiplicações:\n";
    resultados += `A * B = ${A * B}\n`;
    resultados += `A * C = ${A * C}\n`;
    resultados += `A * D = ${A * D}\n`;
    resultados += `B * C = ${B * C}\n`;
    resultados += `B * D = ${B * D}\n`;
    resultados += `C * D = ${C * D}`;

    alert(resultados);
}

calcularOperacoes();