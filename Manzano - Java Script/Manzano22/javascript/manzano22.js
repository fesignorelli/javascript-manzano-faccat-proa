function calcularPotencia() {

    let base = parseInt(prompt("Digite a base:"));
    let expoente = parseInt(prompt("Digite o expoente:"));

    if (isNaN(base) || isNaN(expoente)) {
        alert("Por favor, insira números inteiros válidos para a base e o expoente.");
        return;
    }

    let resultado = 1;
    for (let i = 1; i <= expoente; i++) {
        resultado *= base;
    }

    let mensagem = `${base}^${expoente} = ${resultado}`;
    alert(mensagem);

    console.log(mensagem);
}

calcularPotencia();