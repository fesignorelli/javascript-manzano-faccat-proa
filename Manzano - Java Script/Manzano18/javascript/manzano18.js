function somarParesAte500() {

    let soma = 0;
    for (let i = 1; i <= 500; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    let mensagem = `A soma dos números pares entre 1 e 500 é: ${soma}`;
    alert(mensagem);

    console.log(mensagem);
}
somarParesAte500();