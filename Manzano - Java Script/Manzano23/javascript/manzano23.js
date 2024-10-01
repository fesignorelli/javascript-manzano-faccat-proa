function calcularFibonacci() {

    let a = 1;
    let b = 1;
    let resultados = "Sequência de Fibonacci (15 primeiros termos):\n\n";
    resultados += a + "\n" + b + "\n";

    for (let i = 3; i <= 15; i++) {
        let proximo = a + b;
        resultados += proximo + "\n";
        a = b;
        b = proximo;
    }

    alert(resultados);

    console.log(resultados);
}

calcularFibonacci();