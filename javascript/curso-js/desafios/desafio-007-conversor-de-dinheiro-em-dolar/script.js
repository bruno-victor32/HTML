let cotacao = Number(window.prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`))

function converter(){
    let dinheiro = Number(window.prompt(`Quanto R$ você tem na carteira?`))
     dolar = cotacao * dinheiro

    let results = document.querySelector('section#results')
    results.innerHTML = `<p>Vou conseguir comprar US$ ${Math.floor(dolar)} dólares</p>`
}