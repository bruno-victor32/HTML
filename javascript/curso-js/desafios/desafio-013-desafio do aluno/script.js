function notas() {
    let res = document.getElementById('res')
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = Number(window.prompt(`Primeira nota de ${nome}`))
    let nota2 = Number(window.prompt(`Segunda nota de ${nome}`))
    let  media = (nota1 + nota2)/2
    if(media < 3) {
        res.innerHTML += `<p><strong>Analisando a situação de ${nome}</strong></p>`
        res.innerHTML += `<p>Com as notas ${(nota1).toLocaleString('pt-BR')} e ${(nota2).toLocaleString('pt-BR')}, a <strong>média é ${(media).toLocaleString('pt-BR')}</strong></p>`
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <strong><mark style="background-color:red;" >REPROVADO</mark></strong></p>`
    }else if(media >= 3 && media <= 6) {
        res.innerHTML += `<p><strong>Analisando a situação de ${nome}</strong></p>`
        res.innerHTML += `<p>Com as notas ${(nota1).toLocaleString('pt-BR')} e ${(nota2).toLocaleString('pt-BR')}, a <strong>média é ${(media).toLocaleString('pt-BR')}</strong></p>`
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está de <strong style="color:orange;">RECUPERAÇÃO</strong></p>`
    } else if(media > 6) {
        res.innerHTML += `<p><strong>Analisando a situação de ${nome}</strong></p>`
        res.innerHTML += `<p>Com as notas ${(nota1).toLocaleString('pt-BR')} e ${(nota2).toLocaleString('pt-BR')}, a <strong>média é ${(media).toLocaleString('pt-BR')}</strong></p>`
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <strong><mark  style="background-color:green;"   >APROVADO</mark></strong></p>`
    }
}