function calcularQuadradoDaDiferenca() {

    let A = parseInt(prompt("Digite o valor de A: "));
    let B = parseInt(prompt("Digite o valor de B: "));

    if (isNaN(A) || isNaN(B)) {
        alert("Por favor, insira valores inteiros válidos para A e B.");
        return;
    }

    let resultado = A - B;
    resultado = resultado * resultado;

    alert(`O quadrado da diferença entre A e B é: ${resultado}`);
}

calcularQuadradoDaDiferenca();