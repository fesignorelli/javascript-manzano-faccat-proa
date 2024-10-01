function calcularDivisao() {

    let dividendo = parseInt(prompt("Digite o dividendo:"));
    let divisor = parseInt(prompt("Digite o divisor:"));

    if (isNaN(dividendo) || isNaN(divisor) || divisor === 0) {
        alert("Por favor, insira números inteiros válidos. O divisor não pode ser zero.");
        return;
    }

    let quociente = 0;
    let dividendoOriginal = dividendo;
    do {
        dividendo -= divisor;
        quociente++;
    } while (dividendo >= divisor);

    let resultado = `A divisão de ${dividendoOriginal} por ${divisor} resulta em:\n` +
        `Quociente: ${quociente}\n` +
        `Resto: ${dividendo}`;

    alert(resultado);
    console.log(resultado);
}

calcularDivisao();