kgMorango = parseFloat(prompt("Digite a quantidade (em Kg) de morangos: "));
kgMaca = parseFloat(prompt("Digite a quantidade (em Kg) de maçãs: "));

if (kgMorango > 5) {
    precoMorango = 2.20;
} else {
    precoMorango = 2.50;
}
if (kgMaca > 5) {
    precoMaca = 1.50;
} else {
    precoMaca = 1.80;
}
totalMorango = kgMorango * precoMorango;
totalMaca = kgMaca * precoMaca;
totalCompra = totalMorango + totalMaca;

if ((kgMorango + kgMaca > 8) || (totalCompra > 25)) {
    desconto = totalCompra * 0.10;
    totalCompra -= desconto;
}
alert("O valor total a ser pago é: R$ " + totalCompra.toFixed(2));
