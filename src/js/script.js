//Alerta de Boas-vindas
window.onload = function() {
    alert("Seja bem-vindo!");
}

//Função que muda a cor do site
var cores = ['slategray', 'white', 'olivedrab'];
var corAtual = 0;

function mudarCor() {
    document.body.style.backgroundColor = cores[corAtual % cores.length];
    corAtual++;
}

//SLIDESHOW
let imagens=['./src/assets/Bicicleta1.jpg','./src/assets/Bicicleta2.jpg','./src/assets/Bicicleta3.jpg','./src/assets/Bicicleta4.jpg'];
let index =0;
let time= 3000;

//FUNÇÃO SLIDESHOW
function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}
slideShow();
