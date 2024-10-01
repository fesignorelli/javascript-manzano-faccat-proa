function converterRealParaDolar() {

    let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação do dólar: "));
    let valorReais = parseFloat(prompt("Digite o valor em reais: "));

    if (isNaN(cotacaoDolar) || isNaN(valorReais) || cotacaoDolar <= 0 || valorReais < 0) {
        alert("Por favor, insira valores numéricos válidos. A cotação deve ser maior que zero e o valor em reais não pode ser negativo.");
        return;
    }

    let valorDolar = valorReais / cotacaoDolar;

    alert(`O valor em dólares é: US$ ${valorDolar.toFixed(2)}`);
}

converterRealParaDolar();