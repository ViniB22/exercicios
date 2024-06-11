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
    res1.innerHTML = conta1
});
exercicio2.addEventListener('click', () => {
    conta2 = 9 - 4 * 9 / 3 + 6 / 2  
    res2.innerHTML = conta2
});
exercicio3.addEventListener('click', () => {
    conta3 = 5.5 + 3.3 / 2.0 * 4.8 + 6.1
    res3.innerHTML = conta3.toFixed(2)
});
exercicio4.addEventListener('click', () => {
    conta4 = 7.9 * 3.2 + 5.2 / 3.1 + 7.9
    res4.innerHTML = conta4.toFixed(2)
});
exercicio5.addEventListener('click', () => {
    conta5 = (5 + 3) * 5 / 2 + 8 * 3 
    res5.innerHTML = conta5
});
exercicio6.addEventListener('click', () => {
    conta6 = (7 - 2) + 9 / (2 + 1) * 8
    res6.innerHTML = conta6
});
exercicio7.addEventListener('click', () => {
    conta7 = ((27 / 3.5) + (39 / 6.3)) / 2
    res7.innerHTML = `A média de gastos de quilômetro por gasolina foi de ${conta7.toFixed(2)}`
});
exercicio8.addEventListener('click', () => {
    conta8 = (7.6 + 6.3 + 8.1) / 3
    res8.innerHTML = `A média do aluno foi ${conta8}`
});
exercicio9.addEventListener('click', () => {
    conta9 = 589 + 1973 + 1470 + 2420 + 744
    res9.innerHTML = `A média do aluno foi ${conta9}`
});