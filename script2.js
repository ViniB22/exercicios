res = document.getElementById("res")
calcular = document.getElementById("calcular")
conta = 0;

calcular.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)

    conta = (num1 * 19) + (num2 * 22) + (num3 * 17)

    res.innerHTML = `O total da sua compra foi de R$ ${conta.toFixed(2)}`
})