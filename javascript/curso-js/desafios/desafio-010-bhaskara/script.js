function calc() {
    let n1 = Number(window.prompt('Qual é o valor de a? '))
    let n2 = Number(window.prompt('Qual é o valor de b? '))
    let n3 = Number(window.prompt('Qual é o valor de c? '))
    resultado = ((n2*n2)-(4*n1*n3))
    let res = document.querySelector('section#res')
    res.innerHTML += `<p><strong>Resolvendo Bhaskara</strong></p>`
    res.innerHTML += `<p>A equação atual é <strong>${n1}x<sup>2</sup> + ${n2}x + ${n3} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&#916; = ${n2}<sup>2</sup> - 4 . ${n1} . ${n3}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <mark><strong>&#916; = ${resultado}</strong></mark></p>`
}