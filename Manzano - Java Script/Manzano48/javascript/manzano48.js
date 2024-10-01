function calcularEstatisticasEleicao() {

    let votosA = parseInt(prompt("Digite a quantidade de votos válidos para o candidato A:"));
    let votosB = parseInt(prompt("Digite a quantidade de votos válidos para o candidato B:"));
    let votosC = parseInt(prompt("Digite a quantidade de votos válidos para o candidato C:"));
    let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos:"));
    let votosBrancos = parseInt(prompt("Digite a quantidade de votos em branco:"));

    if ([votosA, votosB, votosC, votosNulos, votosBrancos].some(isNaN) ||
        [votosA, votosB, votosC, votosNulos, votosBrancos].some(v => v < 0)) {
        alert("Por favor, insira valores numéricos válidos e não negativos para todos os tipos de votos.");
        return;
    }

    let totalEleitores = votosA + votosB + votosC + votosNulos + votosBrancos;
    let percValidos = ((votosA + votosB + votosC) * 100) / totalEleitores;
    let percA = (votosA * 100) / totalEleitores;
    let percB = (votosB * 100) / totalEleitores;
    let percC = (votosC * 100) / totalEleitores;
    let percNulos = (votosNulos * 100) / totalEleitores;
    let percBrancos = (votosBrancos * 100) / totalEleitores;

    let resultados = `Total de eleitores: ${totalEleitores}\n` +
        `Percentual de votos válidos: ${percValidos.toFixed(2)}%\n` +
        `Percentual de votos para o candidato A: ${percA.toFixed(2)}%\n` +
        `Percentual de votos para o candidato B: ${percB.toFixed(2)}%\n` +
        `Percentual de votos para o candidato C: ${percC.toFixed(2)}%\n` +
        `Percentual de votos nulos: ${percNulos.toFixed(2)}%\n` +
        `Percentual de votos em branco: ${percBrancos.toFixed(2)}%`;

    alert(resultados);
    console.log(resultados);
}

calcularEstatisticasEleicao();