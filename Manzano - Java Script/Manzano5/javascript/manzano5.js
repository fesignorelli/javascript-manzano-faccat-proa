function calcularPrestacao() {
    let valor = parseFloat(prompt("Digite o valor da prestação: "));
    let taxa = parseFloat(prompt("Digite a taxa de juros (%): "));
    let tempo = parseFloat(prompt("Digite o tempo de atraso (em meses): "));

    if (isNaN(valor) || isNaN(taxa) || isNaN(tempo) || valor < 0 || taxa < 0 || tempo < 0) {
        alert("Por favor, insira valores numéricos válidos para valor, taxa e tempo.");
        return;
    }

    let prestacao = valor + (valor * taxa / 100) * tempo;

    alert(`O valor da prestação em atraso é: R$ ${prestacao.toFixed(2)}`);
}

calcularPrestacao();