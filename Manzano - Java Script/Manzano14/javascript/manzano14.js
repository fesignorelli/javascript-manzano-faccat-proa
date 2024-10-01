function calcularSomaQuadrados() {

    let A = parseFloat(prompt("Digite o valor de A: "));
    let B = parseFloat(prompt("Digite o valor de B: "));
    let C = parseFloat(prompt("Digite o valor de C: "));

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Por favor, insira valores numéricos válidos para A, B e C.");
        return;
    }

    let resultado = (A * A) + (B * B) + (C * C);

    alert(`A soma dos quadrados dos três valores é: ${resultado.toFixed(2)}`);
}

calcularSomaQuadrados();