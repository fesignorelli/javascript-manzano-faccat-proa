function encontrarMaiorMenor() {

    let maior = -99999;
    let menor = 99999;
    let valor;

    do {
        valor = parseInt(prompt("Digite um valor (negativo para sair):"));

        if (!isNaN(valor) && valor >= 0) {
            if (valor > maior) {
                maior = valor;
            }
            if (valor < menor) {
                menor = valor;
            }
        } else if (isNaN(valor)) {
            alert("Por favor, insira um número válido.");
        }
    } while (valor >= 0);

    if (maior === -99999 || menor === 99999) {
        alert("Nenhum valor positivo foi informado.");
    } else {
        let resultado = `O maior valor informado foi: ${maior}\n` +
                        `O menor valor informado foi: ${menor}`;
        alert(resultado);
        console.log(resultado);
    }
}

encontrarMaiorMenor();