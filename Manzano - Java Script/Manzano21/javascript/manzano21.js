function calcularPotenciasDe3() {
    let base = 3;
    let resultado = 1; // 3^0 é 1
    let resultados = "Potências de 3 de 0 a 15:\n\n";

    for (let i = 0; i <= 15; i++) {
        resultados += `${base}^${i} = ${resultado}\n`;
        resultado *= base;
    }

    alert(resultados);

    console.log(resultados);
}

calcularPotenciasDe3();