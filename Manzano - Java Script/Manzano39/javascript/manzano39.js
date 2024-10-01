function somarParesAte500() {

    let soma = 0;
    let i = 1;

    while (i <= 500) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }

    let resultado = `A soma dos números pares entre 1 e 500 é: ${soma}`;
    alert(resultado);
    console.log(resultado);
}
somarParesAte500();