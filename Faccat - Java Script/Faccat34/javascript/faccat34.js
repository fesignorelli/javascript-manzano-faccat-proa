x = parseInt(prompt("Digite o valor de x: "));
y = parseInt(prompt("Digite o valor de y: "));

z = (x * y) + 5;

if (z === 0) {
    resposta = "A";
} else if (z <= 100) {
    resposta = "B";
} else {
    resposta = "C";
}
alert("Valor de z: " + z + " Resposta: " + resposta);
