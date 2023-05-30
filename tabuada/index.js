const botao = document.querySelector('.botao');
botao.addEventListener('click', function(){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const numero = document.querySelector('#numero');
    const num = Number(numero.value);
    
    for (let i = 0; i <= 10; i++){
        let tabuada = i * num;
        resultado.innerHTML += `${num} x ${i} = ${tabuada}<br>`;
    } 
});