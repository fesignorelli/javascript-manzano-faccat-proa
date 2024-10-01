let numero1 = parseInt(prompt("Digite um número: "));
let numero2 = parseInt(prompt("Digite um número: "));
let numero3 = parseInt(prompt("Digite um número: "));

if (numero1 > numero2) {
    if (numero1 > numero3) {
        alert("Número " + numero1 + " é maior que número " + numero2);
    } else {
        alert("Número " + numero1 + " é menor que número " + numero3);
    }
} else {
    if (numero2 > numero1) {
        if (numero2 > numero3) {
            alert("Número " + numero2 + " é maior que número " + numero1);
        } else {
            alert("Número " + numero3 + " é maior que número " + numero2);
        }
    }
}
