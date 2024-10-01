function exibirMultiplosDe4() {
    let resultados = "Números divisíveis por 4 menores que 200:\n\n";
    let i = 1;

    while (i < 200) {
        if (i % 4 === 0) {
            resultados += i + " ";
        }
        i++;
    }

    alert(resultados);

    console.log(resultados);
}

exibirMultiplosDe4();