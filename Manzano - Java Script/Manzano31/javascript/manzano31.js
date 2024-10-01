function calcularSomatorioFatoriais() {
    let soma = 0n;
    let i = 1;

    do {
        let valor = parseInt(prompt(`Digite o valor ${i}:`));

        // Verificação de entrada válida
        if (isNaN(valor) || valor < 0) {
            alert("Por favor, insira um número inteiro não-negativo.");
            continue;
        }

        let fatorial = 1n;
        for (let j = 1n; j <= BigInt(valor); j++) {
            fatorial *= j;
        }

        soma += fatorial;
        i++;
    } while (i <= 15);

    let resultado = `O somatório dos fatoriais é: ${soma.toString()}`;
    alert(resultado);

    console.log(resultado);
}

calcularSomatorioFatoriais();