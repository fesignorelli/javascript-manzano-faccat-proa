function somarCemPrimeirosNumeros() {

    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma += i;
    }

    alert(`A soma dos 100 primeiros números inteiros é: ${soma}`);

    console.log(`A soma dos 100 primeiros números inteiros é: ${soma}`);
}

somarCemPrimeirosNumeros();