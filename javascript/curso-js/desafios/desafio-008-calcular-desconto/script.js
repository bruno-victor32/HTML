function desconto() {
    let nome = window.prompt(`Qual é o produto que você está comprando?`)
    let preco = window.prompt(`Qual é o preço do(a) ${nome}?`)
    let porc = 10
    let valor = (preco * porc ) / 100
    let novo = preco - valor

    let results = document.querySelector ("div#results")
    results.innerHTML =  `<p><strong>Calculando desconto de 10% para ${nome}/strong></p>`
    results.innerHTML +=  `<p>O preço original era R$ ${preco}.</p>`
    results.innerHTML +=  `<p>Você acaba de ganhar R$ ${valor} de desconto (-10%).</p>`
    results.innerHTML +=  `<p>No fim, você vai pagar R$ ${novo} no produto ${nome}.</p>`
}