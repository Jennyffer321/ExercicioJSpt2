alert (`olá!`)
let altura = parseFloat(prompt(`Digite sua altura em metros:`));
let peso = parseFloat(prompt(`Digite seu peso em quilogramas:`))

let imc = peso / (altura * altura)

if (imc >= 18.5 && imc < 24.9) {
    alert (`Seu IMC está dentro do intervalo saudável!`);
}

else{
    alert (`Seu IMC não está dentro do intervalo saudável...`);
}