var salarioFixo = parseFloat(prompt("digite seu salário"));
var valorDeVendas = parseFloat(prompt("digite o valor de vendas"));
var salarioTotal = parseFloat;

if (valorDeVendas < 1500) {
    salarioTotal = salarioFixo + 0.03 * valorDeVendas;
    alert("Seu salário total é: " + salarioTotal)
}

else if (valorDeVendas >= 1500) {
    salarioTotal = salarioFixo + 0.03 * valorDeVendas
    alert("Seu salário total é: " + salarioTotal)
}