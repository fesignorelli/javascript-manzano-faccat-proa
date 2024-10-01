var horasTrabalhadasNoMes = parseInt(prompt("Quais são as horas trabalhas no mês?"))
var primeiroSalario = parseInt
var salarioPorHora = parseInt(prompt("Quanto ganha por hora?"))
var total = parseInt
var acrescimo = parseInt
var diferencaHorasTrabalhadas = parseInt

if (horasTrabalhadasNoMes > 160) {
    primeiroSalario = 160 * salarioPorHora
    diferencaHorasTrabalhadas = horasTrabalhadasNoMes - 160
    acrescimo = salarioPorHora * 1, 5 * diferencaHorasTrabalhadas
    total + acrescimo + primeiroSalario
    alert("O salário final vai ser de: " + total)
}

else if (horasTrabalhadasNoMes < 160) {
    total = horasTrabalhadasNoMes * salarioPorHora
    alert("Total: " + total)
}

