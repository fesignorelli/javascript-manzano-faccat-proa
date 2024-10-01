const pi = 3.14159;
function obterEntrada(mensagem) {
    return parseFloat(prompt(mensagem));
}

function calcularVolumeLata() {
    let raio = obterEntrada("Digite o valor do raio da lata: ");
    let altura = obterEntrada("Digite o valor da altura da lata: ");

    if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
        alert("Por favor, insira valores numéricos positivos para raio e altura.");
        return;
    }

    let volume = pi * (raio ** 2) * altura;

    alert("O volume da lata de óleo é: ${volume.toFixed(2)} unidades cúbicas.");
}

calcularVolumeLata();