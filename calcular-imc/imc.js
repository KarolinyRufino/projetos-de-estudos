// parar o envio do formulário (o padrão)
// capturar o evento de submit do formulário
const form = document.querySelector('#form');

// escuta o que acontece na página e retorna o que é pedido
form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // 'e.targe' vai me dizer qual foi clicado
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value); // converto o valor recebido para Number
    const altura = Number(inputAltura.value); //.value para receber o valor, se nao da NaN (not a number)

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}) `;
    setResultado(msg, true);
});

// calcular imc
function getImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// enviar o nível
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
    
    if (imc >= 39.9) return nivel[5]; // não preciso de 'else if' devido ao tamanho do código
    if (imc >= 34.9) return nivel[4]; // como o meu if é pequeno, eu posso "cortá-lo", sem precisar de chaves
    if (imc >= 29.9) return nivel[3]; 
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <  18.5) return nivel[0];
}

//função que cria paragrafos
function criaP() {
    const p = document.createElement('p');
    return p; //vai retornar o que foi criado (p)
}

//criar função para add algo ao resultado e mostrar na tela
function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ''; // limpa o conteúdo existente

    const p = criaP(); // "chama" a função criada acima aqui
    if (isValid) { 
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg; // adiciona texto
    resultado.appendChild(p); // adiciona elemento filho (p)
}