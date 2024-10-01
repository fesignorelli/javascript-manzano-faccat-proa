nomeProduto = prompt("Digite a descrição do produto: ");
quantidade = parseInt(prompt("Digite a quantidade adquirida: "));
precoUnitario = parseFloat(prompt("Digite o preço unitário: "));

total = quantidade * precoUnitario;

if (quantidade <= 5) {
    desconto = total * 0.02; // Desconto de 2%
} else if (quantidade <= 10) {
    desconto = total * 0.03; // Desconto de 3%
} else {
    desconto = total * 0.05; // Desconto de 5%
}

totalPagar = total - desconto;

alert(
    "Produto: " + nomeProduto + "\n" +
    "Quantidade adquirida: " + quantidade + "\n" +
    "Preço unitário: R$ " + precoUnitario.toFixed(2) + "\n" +
    "Total: R$ " + total.toFixed(2) + "\n" +
    "Desconto: R$ " + desconto.toFixed(2) + "\n" +
    "Total a pagar: R$ " + totalPagar.toFixed(2)
);
