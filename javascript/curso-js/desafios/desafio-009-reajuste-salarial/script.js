function reajuste() {
    let nome = window.prompt("Qual é o nome do funcionário")
    let salario = Number(window.prompt(`Qual é o salário de ${nome} ?`))
    let porc = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem ?`))
    let porcentagemcalculada = (salario * porc) / 100
    let novo = porcentagemcalculada + salario

    let res = document.querySelector("div#res")
    res.innerHTML = `<p><strong>${nome} recebeu um aumento salarial!</strong></p>`
    res.innerHTML += `<p>O salário atual era R$ ${salario}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porc}%, o salário vai aumentar R$${Math.floor(porcentagemcalculada)} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${Math.floor(novo)} .</p>`
    
}