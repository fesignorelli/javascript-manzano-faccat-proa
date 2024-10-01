function somarPares() {
    let soma = 0;
    let i = 2;

    do {
        soma += i;
        i += 2;
    } while (i <= 500);

    let resultado = `A soma dos números pares entre 1 e 500 é: ${soma}`;
    alert(resultado);

    console.log(resultado);
}

somarPares();