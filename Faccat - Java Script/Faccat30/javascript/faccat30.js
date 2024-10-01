let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

if (valor1 > valor2) {
    temp = valor1;
    valor1 = valor2;
    valor2 = temp;
}
if (valor1 > valor3) {
    temp = valor1;
    valor1 = valor3;
    valor3 = temp;
}
if (valor2 > valor3) {
    temp = valor2;
    valor2 = valor3;
    valor3 = temp;
}

alert("Os valores em ordem crescente são: " + valor1 + ", " + valor2 + ", " + valor3);
