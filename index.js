function turnCoin(){
    let actualImage = document.getElementById('coin');
    if(actualImage.getAttribute('src') == "/img/beija-flor-frente.png"){
        document.getElementById('coin').setAttribute('src', '/img/beija-flor-costas.png');
    } else {
        document.getElementById('coin').setAttribute('src', '/img/beija-flor-frente.png');
    }
}