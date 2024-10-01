function exibirMultiplosDe4() {

    let resultados = "Números divisíveis por 4 entre 1 e 199:\n\n";

    for (let i = 1; i <= 199; i++) {
        if (i % 4 === 0) {
            resultados += i + "\n";
        }
    }

    alert(resultados);

    console.log(resultados);
}

exibirMultiplosDe4();