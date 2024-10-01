function calcularVolumeCaixa() {

    let comprimento = parseFloat(prompt("Digite o comprimento da caixa: "));
    let largura = parseFloat(prompt("Digite a largura da caixa: "));
    let altura = parseFloat(prompt("Digite a altura da caixa: "));

    if (isNaN(comprimento) || isNaN(largura) || isNaN(altura) || 
        comprimento <= 0 || largura <= 0 || altura <= 0) {
        alert("Por favor, insira valores numéricos positivos para comprimento, largura e altura.");
        return;
    }

    let volume = comprimento * largura * altura;

    alert(`O volume da caixa é: ${volume.toFixed(2)} unidades cúbicas.`);
}

calcularVolumeCaixa();