const inputAcender = document.querySelector('.acender');
const inputApagar = document.querySelector('.apagar');
const lamp = document.querySelector('#lamp'); 

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}
function lampOn (){
    if (!isLampBroken()){
        lamp.src = "./imagens/ligada.jpg";
    }
}
function lampOff (){
    if (!isLampBroken()){
        lamp.src = "./imagens/desligada.jpg";
    }   
}
function lampBroken(){
    lamp.src = "./imagens/quebrada.jpg";
}

inputAcender.addEventListener('click', lampOn);
inputApagar.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);