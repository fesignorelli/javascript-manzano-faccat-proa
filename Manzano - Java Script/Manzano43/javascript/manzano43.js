function converterCelsiusParaFahrenheit() {

    let resultados = "Conversão de Celsius para Fahrenheit:\n\n";
    let celsius = 10;

    while (celsius <= 100) {
        let fahrenheit = (celsius * 9 / 5) + 32;
        resultados += `${celsius}°C = ${fahrenheit.toFixed(2)}°F\n`;
        celsius += 10;
    }

    alert(resultados);

    console.log(resultados);
}

converterCelsiusParaFahrenheit();