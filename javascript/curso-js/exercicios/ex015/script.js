function info () {
    let meses = new Array('Jan', 'Fev', 'Mar','Abr', 'Mai','Jun','Jul','Ago', 'Set' ,'Out','Nov','Dez' )
    let semana = new Array ('Dom', 'Seg', 'Ter','Qua','Qui','Sex','Sab')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p><strong>Dia:</strong> <mark>${dia}</mark></p>`
    saida.innerHTML += `<p><strong>Mês:</strong> <mark>${meses[mes]}</mark></p>`
    saida.innerHTML += `<p><strong>Ano:</strong> <mark>${ano}</mark></p>`
    saida.innerHTML += `<p><strong>Dia da semana:</strong> <mark>${semana[sem]}</mark></p>`
    saida.innerHTML += `<p><strong>Hora:</strong> <mark>${hora}</mark></p>`
    saida.innerHTML += `<p><strong>Minutos:</strong> <mark>${min}</mark></p>`
    saida.innerHTML += `<p><strong>Segundos:</strong> <mark>${seg}</mark></p>`
}