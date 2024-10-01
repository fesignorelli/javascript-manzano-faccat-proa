function calcularFatoriais() {

    let resultados = "Fatoriais dos números ímpares de 1 a 10:\n\n";

    for (let i = 1; i <= 10; i += 2) {
        let fatorial = 1;
        for (let j = 1; j <= i; j++) {
            fatorial *= j;
        }
        resultados += `Fatorial de ${i} é: ${fatorial}\n`;
    }

    alert(resultados);

    console.log(resultados);
}

calcularFatoriais();