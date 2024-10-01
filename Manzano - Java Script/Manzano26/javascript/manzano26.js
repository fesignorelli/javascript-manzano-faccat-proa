function calcularQuadrados() {
    let resultados = "Quadrados dos números de 15 a 200:\n\n";
    let i = 15;

    do {
        let quadrado = i * i;
        resultados += `O quadrado de ${i} é: ${quadrado}\n`;
        i++;
    } while (i <= 200);

    alert(resultados);

    console.log(resultados);
}

calcularQuadrados();