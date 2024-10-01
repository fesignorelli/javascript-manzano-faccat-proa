tipoCombustivel = prompt("Digite o tipo de combustível (A (álcool), G (gasolina): ");
litros = parseFloat(prompt("Digite a quantidade de litros vendidos: "));

if (tipoCombustivel === "A") {
    precoLitro = 2.90;

    if (litros <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }
} else if (tipoCombustivel === "G") {
    precoLitro = 3.30;

    if (litros <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }
} else {
    alert("Tipo de combustível inválido!");
    throw new Error("Tipo de combustível inválido!");
}

valorTotal = (litros * precoLitro) * (1 - desconto);

alert("O valor total a ser pago é: R$ " + valorTotal);
