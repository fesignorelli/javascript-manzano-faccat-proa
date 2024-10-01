function exibirImparesAte20() {

    let resultados = "Números ímpares de 0 a 20:\n\n";
    let i = 0;

    while (i <= 20) {
        if (i % 2 !== 0) {
            resultados += i + "\n";
        }
        i++;
    }

    alert(resultados);

    console.log(resultados);
}

exibirImparesAte20();