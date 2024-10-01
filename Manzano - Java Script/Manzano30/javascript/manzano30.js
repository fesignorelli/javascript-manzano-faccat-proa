function calcularGraosDeTrigo() {

    let graos = 1n;
    let soma = 1n;
    let i = 2;

    do {
        graos *= 2n;
        soma += graos;
        i++;
    } while (i <= 64);

    let resultado = `O total de grãos de trigo no tabuleiro é: ${soma.toString()}`;
    alert(resultado);

    console.log(resultado);
}

calcularGraosDeTrigo();