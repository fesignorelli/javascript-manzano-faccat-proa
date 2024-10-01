function calcularPotenciasDe3() {

    let base = 3;
    let i = 0;
    let resultado = 1; // 3^0 é 1
    let resultados = "Potências de 3 de 0 a 15:\n\n";

    while (i <= 15) {
        resultados += `${base}^${i} = ${resultado}\n`;
        resultado *= base;
        i++;
    }

    alert(resultados);

    console.log(resultados);
}
calcularPotenciasDe3();