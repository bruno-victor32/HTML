function converter() {
    let distancia = Number(window.prompt(`Digite uma distância em metros (m)`))
    quilometro    = distancia /1000 //km
    hectometros   = distancia /100//hm
    decametros    = distancia /10//dam
    decimetros    = distancia *10//dm
    centimetros   = distancia *100 //cm
    milimetros    = distancia *1000 //mm

    let results = document.querySelector('section#results')
    results.innerHTML = `<p><strong>A distância de ${distancia} metros, corresponde a ...</p></strong>`
    results.innerHTML += `<p><mark>${quilometro}</mark> quilômetros (Km)</p>`
    results.innerHTML += `<p><mark>${hectometros}</mark> hectômetros (Hm)</p>`
    results.innerHTML += `<p><mark>${decametros}</mark> decâmetros (Dam)</p>`
    results.innerHTML += `<p><mark>${decimetros}</mark> decímetros (dm)</p>`
    results.innerHTML += `<p><mark>${centimetros}</mark> centímetros (cm)</p>`
    results.innerHTML += `<p><mark>${milimetros}</mark> milímetros (mm)</p>`
}