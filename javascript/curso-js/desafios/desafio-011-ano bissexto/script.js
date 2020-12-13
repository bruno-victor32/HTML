function calcular() {
    let ano = Number(window.prompt('Qual é o ano que você quer verificar'))
    let  res
    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0) ) {
        res = '<strong><mark style="background-color:#00ff7f;">É BISSEXTO</mark><strong> &#x2705;'
    }else {
        res = '<strong><mark style="background-color:#ff0000;">NÃO É BISSEXTO</mark><strong> &#x274C;' 
    }

    let resultado = document.querySelector('section#resultado')
    resultado.innerHTML += `<p><strong>Analisando o ano de ${ano}</strong></p>`
    resultado.innerHTML += `<p>O ano de ${ano} ${res}</p>`
}