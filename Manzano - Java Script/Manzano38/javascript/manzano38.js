function somarCemPrimeirosNumeros() {

    let soma = 0;
    let i = 1;

    while (i <= 100) {
        soma += i;
        i++;
    }

    let resultado = `A soma dos 100 primeiros números inteiros é: ${soma}`;
    alert(resultado);
    console.log(resultado);
}

somarCemPrimeirosNumeros();