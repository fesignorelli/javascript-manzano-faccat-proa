let valor1 = parseInt(prompt("Escreva 1 valor: "));
let valor2 = parseInt(prompt("Escreva outro valor: "));
let valor3 = parseInt(prompt("Escreva mais um valor: "));

if (valor1 < valor2) {
    if (valor1 < valor3) {
        alert((valor2 + valor3) + " É a soma dos dois maiores.");
    } else {
        alert((valor1 + valor2) + " É a soma dos dois maiores.");
    }
} else if (valor2 < valor1) {
    if (valor2 < valor3) {
        alert((valor3 + valor1) + " É a soma dos dois maiores.");
    } else {
        alert((valor2 + valor1) + " É a soma dos dois maiores.");
    }
} else {
    if (valor3 < valor1) {
        alert((valor2 + valor1) + " É a soma dos dois maiores.");
    } else {
        alert((valor3 + valor1) + " É a soma dos dois maiores.");
    }
}
