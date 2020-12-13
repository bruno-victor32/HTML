function verificar() {
    let res = document.querySelector('section#res')
    let precoanterior = Number(window.prompt('Qual era o preço anterior do produto'))
    let precoatual    = Number(window.prompt('Qual e o preço atual do produto'))
    let preco = (100 *  precoanterior) / precoatual
    let precoporcentagem12 = 100 - preco 
    let precoporcentagem = preco - 100  
    let valor = precoatual - precoanterior
    let valor1 = precoanterior - precoatual

    if(precoanterior > precoatual) {
        res.innerHTML +=`<p><strong>Analisando os valores informador</strong></p>`
        res.innerHTML +=`<p> O produto custava  ${(precoanterior).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} e agora custa  ${(precoatual).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`
        res.innerHTML +=`<p> Hoje o produto está mais barato</p>`
        res.innerHTML +=`<p> O preco caiu  ${(valor1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em relação ao preço anterior</p>`
        res.innerHTML +=`<p> Uma variação de ${Math.floor(precoporcentagem12)}% para baixo</p>`
    }else if (precoatual > precoanterior) {
        res.innerHTML +=`<p><strong> Analisando os valores informador</strong></p>`
        res.innerHTML +=`<p> O produto custava  ${(precoanterior).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} e agora custa  ${(precoatual).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`
        res.innerHTML +=`<p> Hoje o produto está mais caro</p>`
        res.innerHTML +=`<p> O preco subiu  ${(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em relação ao preço anterior</p>`
        res.innerHTML +=`<p> Uma variação de ${Math.ceil(precoporcentagem)}% para cima</p>`
    }
}