function calcularEstatisticas() {

    let soma = 0;
    let total = 0;
    let valor;

    do {
        valor = parseFloat(prompt("Digite um valor (negativo para sair):"));

        if (!isNaN(valor) && valor >= 0) {
            soma += valor;
            total++;
        } else if (isNaN(valor)) {
            alert("Por favor, insira um número válido.");
        }
    } while (valor >= 0);

    if (total > 0) {
        let media = soma / total;
        let resultado = `Somatório: ${soma}\n` +
            `Média: ${media.toFixed(2)}\n` +
            `Total de valores lidos: ${total}`;
        alert(resultado);
        console.log(resultado);
    } else {
        alert("Nenhum valor positivo foi fornecido.");
        console.log("Nenhum valor positivo foi fornecido.");
    }
}

calcularEstatisticas();