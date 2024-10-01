function calcularQuadrados() {

    let resultados = "";
    let i = 15;

    do {
        let quadrado = i * i;
        resultados += `O quadrado de ${i} é: ${quadrado}\n`;
        i++;
    } while (i <= 200);

    alert(resultados);

    alert(resultados);
}

calcularQuadrados();