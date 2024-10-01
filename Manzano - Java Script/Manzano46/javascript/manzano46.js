function calcularProdutoESoma() {

    let A = parseInt(prompt("Digite o valor de A:"));
    let B = parseInt(prompt("Digite o valor de B:"));
    let C = parseInt(prompt("Digite o valor de C:"));
    let D = parseInt(prompt("Digite o valor de D:"));

    if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D)) {
        alert("Por favor, insira valores numéricos válidos para A, B, C e D.");
        return;
    }

    let P = A * C;

    let S = B + D;

    let resultados = `O resultado do produto de A e C é: ${P}\n` +
        `O resultado da soma de B e D é: ${S}`;

    alert(resultados);
    console.log(resultados);
}   

calcularProdutoESoma();