var numeroDaConta = parseInt(prompt("Digite o número da sua conta"))
var saldo = parseFloat(prompt("Você tem um saldo de"))
var debito = parseFloat(prompt("Você tem um débito de"))
var credito = parseFloat(prompt("Você tem um crédito de"))
var saldoAtual = parseFloat

saldoAtual = (saldo - debito + credito)

if (saldoAtual > 0) {
    alert("Seu saldo atual é positivo de: " + saldoAtual)
}
else if (saldoAtual < 0) {
    alert("Seu saldo atual é negativo de: ", saldoAtual)
}