function aplicarDesconto() {

    let valorOriginal = 1000;

    let codigoPromocional = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4, DESC5):");

    switch (codigoPromocional) {
        case 'DESC1':
            alert("Você recebeu 5% de desconto!");
            var desconto = 5;
            break;
        case 'DESC2':
            alert("Você recebeu 10% de desconto!");
            var desconto = 10;
            break;
        case 'DESC3':
            alert("Você recebeu 15% de desconto!");
            var desconto = 15;
            break;
        case 'DESC4':
            alert("Você recebeu 20% de desconto!");
            var desconto = 20;
            break;
        case 'DESC5':
            alert("Você recebeu 25% de desconto!");
            var desconto = 25;
            break;
        default:
            alert("Erro: Código promocional inválido!");
            return;
    }


    let valorComDesconto = valorOriginal - (valorOriginal * desconto / 100);


    alert(`Valor original: R$ ${valorOriginal.toFixed(2)}\nValor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
}


aplicarDesconto();