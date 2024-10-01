function calcularTabuada() {

    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let resultados = `Tabuada do ${numero}:\n\n`;

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultados += `${numero} x ${i} = ${resultado}\n`;
    }

    alert(resultados);

    console.log(resultados);
}

calcularTabuada();