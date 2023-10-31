function changeImage(gender) {
    const figuraElement = document.getElementById("figura");
    if (gender === "mulher") {
        figuraElement.src = "img/mulher.png";
    } else if (gender === "homem") {
        figuraElement.src = "img/homem.png";
    }
}
// Função para alterar o background com base no gênero
function changeBackground(genero) {

    var calculadora = document.getElementById('main');

    if (genero === 'mulher') {
        calculadora.style.backgroundColor = 'rgb(187, 64, 85)';
    } else if (genero === 'homem') {
        calculadora.style.backgroundColor = 'rgb(49, 40, 170)';
    }

}

function calcularIMC() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    var imc = peso / (altura * altura);
    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do Peso. <br> Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso Normal. <br> Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso. <br> Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade Grau 1. <br> Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade Grau 2. <br> Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.";
    } else {
        classificacao = "Obesidade Grau 3. <br> Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.";
    }

    var resultado = "Seu IMC é: " + imc.toFixed(2) + " - " + classificacao;
    document.getElementById("resultado").innerHTML = resultado;
}
