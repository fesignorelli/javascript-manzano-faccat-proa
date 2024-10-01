function calcularFibonacci() {

    let a = 1;
    let b = 1;
    let resultados = "Sequência de Fibonacci (15 primeiros termos):\n\n";
    resultados += a + "\n" + b + "\n";

    let i = 3;
    while (i <= 15) {
        let proximo = a + b;
        resultados += proximo + "\n";
        a = b;
        b = proximo;
        i++;
    }

    alert(resultados);

    console.log(resultados);
}

calcularFibonacci();