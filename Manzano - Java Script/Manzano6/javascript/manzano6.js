function trocarValores() {

    let A = parseFloat(prompt("Digite o valor de A: "));
    let B = parseFloat(prompt("Digite o valor de B: "));

    if (isNaN(A) || isNaN(B)) {
        alert("Por favor, insira valores numéricos válidos para A e B.");
        return;
    }

    alert(`Valores originais:\nA: ${A}\nB: ${B}`);

    let temp = A;
    A = B;
    B = temp;

    alert(`Após a troca:\nA: ${A}\nB: ${B}`);
}

trocarValores();