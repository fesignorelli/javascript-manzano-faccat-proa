function converterCelsiusParaFahrenheit() {

    let resultados = "Conversão de Celsius para Fahrenheit:\n\n";

    for (let celsius = 10; celsius <= 100; celsius += 10) {
        let fahrenheit = (celsius * 9 / 5) + 32;
        resultados += `${celsius}°C = ${fahrenheit.toFixed(2)}°F\n`;
    }

    alert(resultados);

    console.log(resultados);
}

converterCelsiusParaFahrenheit();