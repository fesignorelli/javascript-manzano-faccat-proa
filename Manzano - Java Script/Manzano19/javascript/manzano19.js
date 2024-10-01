function exibirImparesAte20() {

    let resultados = "Números ímpares de 0 a 20:\n\n";

    for (let i = 0; i <= 20; i++) {
        if (i % 2 !== 0) {
            resultados += i + "\n";
        }
    }
    alert(resultados);

    console.log(resultados);
}
exibirImparesAte20();