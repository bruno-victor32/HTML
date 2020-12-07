function calcular() {
    let produto = (window.prompt(`Que produto você está comprando`))
    let valorproduto = Number(window.prompt(`Quanto custa ${produto} que você está comprando`))
    let pagamento = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    troco = pagamento - valorproduto
    window.alert(`Você comprou ${produto} que custou R$ ${valorproduto}.\n Deu R$ ${pagamento} em dinheiro e vai receber R$ ${troco} de troco. \n Volte Sempre`)
}