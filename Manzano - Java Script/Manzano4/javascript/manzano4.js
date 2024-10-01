function calcularViagem() {

    let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas): "));
    let velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem (em km/h): "));

    if (isNaN(tempo) || isNaN(velocidade) || tempo <= 0 || velocidade <= 0) {
        alert("Por favor, insira valores numéricos positivos para tempo e velocidade.");
        return;
    }

    let distancia = tempo * velocidade;

    let litrosUsados = distancia / 12;

    let resultado = "Resultados da Viagem:\n\n" +
        `Velocidade média: ${velocidade.toFixed(2)} km/h\n` +
        `Tempo gasto na viagem: ${tempo.toFixed(2)} horas\n` +
        `Distância percorrida: ${distancia.toFixed(2)} km\n` +
        `Quantidade de litros de combustível utilizados: ${litrosUsados.toFixed(2)} litros`;

    alert(resultado);
}

calcularViagem();