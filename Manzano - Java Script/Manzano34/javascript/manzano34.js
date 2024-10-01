function calcularAreaResidencia() {

    let areaTotal = 0;
    let continuar;

    do {
        let nomeComodo = prompt("Digite o nome do cômodo:");
        let largura = parseFloat(prompt("Digite a largura do cômodo:"));
        let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"));

        if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
            alert("Por favor, insira valores numéricos positivos para largura e comprimento.");
            continue;
        }

        let areaComodo = largura * comprimento;
        areaTotal += areaComodo;

        alert(`A área do cômodo ${nomeComodo} é: ${areaComodo.toFixed(2)} m²`);

        continuar = prompt("Deseja continuar calculando? (SIM/NAO):").toUpperCase();
    } while (continuar !== "NAO");

    alert(`A área total da residência é: ${areaTotal.toFixed(2)} m²`);

    console.log(`A área total da residência é: ${areaTotal.toFixed(2)} m²`);
}

calcularAreaResidencia();