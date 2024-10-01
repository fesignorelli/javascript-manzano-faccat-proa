var time1 = (prompt("Digite o nome do primeiro time"))
var time2 = (prompt("Digite o nome do segundo time"))
var golsTime1 = parseInt(prompt("Digite o número de gols do " + time1 + ": "))
var golsTime2 = parseInt(prompt("Digite o número de gols do " + time2 + ": "))

if (golsTime1 > golsTime2) {
    alert("O vencedor é o " + time1)
} else if (golsTime2 > golsTime1) {
    alert("O vencedor é o " + time2)
} else {
    alert("EMPATE")
}