let listaNumerosAleatorios = [];
minimo = 1;
maximo = 3;
let numeroAleatorio = gerarNumeroAleatorio(maximo);
console.log(numeroAleatorio);
tentativas = 0;

function exibirTexto (tag, descrição) {
    let texto = document.querySelector(tag);
    texto.innerHTML = descrição;
}
function exibirTextoInicial(){
    exibirTexto('h1', 'Jogo do número secreto ');
    exibirTexto('p', `Insira o numero entre ${minimo} e ${maximo}`);
}

exibirTextoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++;
    let tentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
    if (chute == numeroAleatorio) {
        exibirTexto('p', `Parabens voce acertou o numero com ${tentativas} ${tentativa}`);
        exibirTexto('h1', 'Acertou');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (chute > numeroAleatorio) {
        exibirTexto('p', 'O numero aleatorio é menor');
        limparChute();
    } else {
        exibirTexto('p', 'O numero aleatorio é maior');
        limparChute();
    }
}

function gerarNumeroAleatorio(numero) {
    let numeroEscolhido = parseInt(Math.random() * numero + 1);
    console.log(listaNumerosAleatorios)
    let quantiaNumeros = listaNumerosAleatorios.length;
    if (quantiaNumeros == maximo){
        listaNumerosAleatorios = [];
    }
    if (listaNumerosAleatorios.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(maximo);
    } else {
        listaNumerosAleatorios.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparChute() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio(maximo);
    tentativas = 0;
    limparChute();
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}