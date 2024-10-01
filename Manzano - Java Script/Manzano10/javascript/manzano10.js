function converterDolarParaReal() {

    let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação do dólar: "));
    let valorDolar = parseFloat(prompt("Digite o valor em dólares: "));

    if (isNaN(cotacaoDolar) || isNaN(valorDolar) || cotacaoDolar <= 0 || valorDolar < 0) {
        alert("Por favor, insira valores numéricos válidos. A cotação deve ser maior que zero e o valor em dólares não pode ser negativo.");
        return;
    }

    let valorReal = valorDolar * cotacaoDolar;

    alert(`O valor em reais é: R$ ${valorReal.toFixed(2)}`);
}

converterDolarParaReal();