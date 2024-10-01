function calcularTabuada() {

    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

    if (isNaN(numero)) {
        alert("Por favor, insira um número inteiro válido.");
        return;
    }

    let resultado = `Tabuada do ${numero}:\n\n`;
    let i = 1;

    while (i <= 10) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
        i++;
    }

    alert(resultado);
    console.log(resultado);
}

calcularTabuada();