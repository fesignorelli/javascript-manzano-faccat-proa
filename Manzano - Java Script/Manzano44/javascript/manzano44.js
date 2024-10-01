function calcularSomaMediaPares() {

    let soma = 0;
    let contador = 0;
    let i = 50;

    while (i <= 70) {
        if (i % 2 === 0) {
            soma += i;
            contador++;
        }
        i++;
    }

    let media = soma / contador;

    let resultados = `A soma dos números pares entre 50 e 70 é: ${soma}\n` +
        `A média dos números pares entre 50 e 70 é: ${media.toFixed(2)}`;

    alert(resultados);

    console.log(resultados);
}

calcularSomaMediaPares();