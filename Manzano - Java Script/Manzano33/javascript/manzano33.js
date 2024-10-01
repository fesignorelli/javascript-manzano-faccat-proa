function calcularFatoriaisImpares() {
    let resultados = "Fatoriais dos números ímpares de 1 a 10:\n\n";
    let i = 1;

    do {
        let fatorial = 1;
        let j = 1;

        do {
            fatorial *= j;
            j++;
        } while (j <= i);

        resultados += `Fatorial de ${i} é: ${fatorial}\n`;
        i += 2;
    } while (i <= 10);

    alert(resultados);

    console.log(resultados);
}

calcularFatoriaisImpares();