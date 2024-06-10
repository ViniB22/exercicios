let exercicio1 = document.getElementById("exercicio1")
let exercicio2 = document.getElementById("exercicio2")
let exercicio3 = document.getElementById("exercicio3")
let exercicio4 = document.getElementById("exercicio4")
let exercicio5 = document.getElementById("exercicio5")
let exercicio6 = document.getElementById("exercicio6")
let exercicio7 = document.getElementById("exercicio7")
let exercicio8 = document.getElementById("exercicio8")
let exercicio9 = document.getElementById("exercicio9")
let conta1 = 0;
let conta2 = 0;
let conta3 = 0;
let conta4 = 0;
let conta5 = 0;
let conta6 = 0;
let conta7 = 0;
let conta8 = 0;
let conta9 = 0;

exercicio1.addEventListener('click', () => {
    conta1 = 5 + 3 * 4 - 8 / 2 
    res1.innerHTML = `5 + 3 * 4 - 8 / 2 = ${conta1} <br> (em linguagem de programa)`
});
exercicio2.addEventListener('click', () => {
    conta2 = 9 - 4 * 9 / 3 + 6 / 2  
    res2.innerHTML = `9 - 4 * 9 / 3 + 6 / 2 = ${conta2} <br> (em linguagem de programa)`
});
exercicio3.addEventListener('click', () => {
    conta3 = 5.5 + 3.3 / 2.0 * 4.8 + 6.1
    res3.innerHTML = `5.5 + 3.3 / 2.0 * 4.8 + 6.1 = ${conta3.toFixed(2)} <br> (em linguagem de programa)`
});
exercicio4.addEventListener('click', () => {
    conta4 = 7.9 * 3.2 + 5.2 / 3.1 + 7.9
    res4.innerHTML = `7.9 * 3.2 + 5.2 / 3.1 + 7.9 = ${conta4.toFixed(2)} <br> (em linguagem de programa)`
});
exercicio5.addEventListener('click', () => {
    conta5 = (5 + 9) * 5 / 2 + 8 * 3 
    res5.innerHTML = `(5 + 9) * 5 / 2 + 8 * 3  = ${conta5} <br> (em linguagem de programa)`
});
exercicio6.addEventListener('click', () => {
    conta6 = (7 - 2) + 9 / (2 + 1) * 8
    res6.innerHTML = `(7 - 2) + 9 / (2 + 1) * 8  = ${conta6} <br> (em linguagem de programa)`
});
exercicio7.addEventListener('click', () => {
    conta7 = ((27 / 3.5) + (39 / 6.3)) / 2
    res7.innerHTML = `Faça um algoritmo para calcular a média de <br> quilômetros por litro de gasolina que um carro faz <br> ao percorrer uma distância. No primeiro trecho o <br>carro andou 27 km e gastou 3.5 litros, no segundo <br>trecho, andou 39 km e gastou 6.3 litros. <br> A média foi de ${conta7.toFixed(2)}`
});
exercicio8.addEventListener('click', () => {
    conta8 = (7.6 + 6.3 + 8.1) / 3
    res8.innerHTML = `Faça um algoritmo para calcular a média da nota <br> de uma aluno em função das suas avaliações. O <br> aluno fez 3 avaliações e obteve as seguintes notas: <br> 7.5, 6.3 e 8.1, respectivamente. <br> A média do aluno foi ${conta8.toFixed(2)}`
});
exercicio9.addEventListener('click', () => {
    conta9 = 589 + 1973 + 1470 + 2420 + 744
    res9.innerHTML = `Faça um algoritmo para calcular média dos pesos <br> de 5 produtos. As medidas realizadas pela balança <br> foram as seguintes: peso 1 = 589 gramas, peso 2 = <br> 1973 gramas, peso 3 = 1,47 quilogramas, peso 4 = <br> 2,42 quilogramas, peso 5 = 744 gramas. Apresente <br> o resultado em gramas e em quilogramas. <br> A média do aluno foi ${conta9}`
});