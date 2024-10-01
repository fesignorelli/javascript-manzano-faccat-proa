function calcularNovoSalario() {

    let SM = parseFloat(prompt("Digite o valor do salário mensal:"));
    let PR = parseFloat(prompt("Digite o percentual de reajuste:"));

    if (isNaN(SM) || isNaN(PR) || SM < 0 || PR < 0) {
        alert("Por favor, insira valores numéricos válidos e positivos para o salário e o percentual de reajuste.");
        return;
    }

    let NS = SM + (SM * PR / 100);

    let resultado = `O novo salário (NS) é: R$ ${NS.toFixed(2)}`;

    alert(resultado);
    console.log(resultado);
}

calcularNovoSalario();