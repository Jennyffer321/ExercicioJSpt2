function calcular() {

    let operacao = prompt("Escolha a operação: \n1 para Adição\n2 para Subtração\n3 para Multiplicação\n4 para Divisão");

    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    switch (operacao) {
        case '1':
            alert("Resultado: " + (numero1 + numero2));
            break;
        case '2':
            alert("Resultado: " + (numero1 - numero2));
            break;
        case '3':
            alert("Resultado: " + (numero1 * numero2));
            break;
        case '4':
            if (numero2 !== 0) {
                alert("Resultado: " + (numero1 / numero2));
            } else {
                alert("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            alert("Operação inválida! Digite 1, 2, 3 ou 4.");
            break;
    }
}

calcular();