var pesoIdeal = parseFloat;
var nome = prompt("Digite o seu nome");
var sexo = prompt("Digite o seu sexo (M ou F)").toUpperCase();
var altura = parseFloat(prompt("Digite sua altura"));

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;
    alert("Seu peso ideial é: " + pesoIdeal)
}

else if (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
    alert("Seu peso ideal é: " + pesoIdeal)
}

