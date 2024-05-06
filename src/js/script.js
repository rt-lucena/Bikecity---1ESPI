//Alerta de Boas-vindas (index.html)
window.onload = function() {
    if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
        alert("Seja bem-vindo!");
    }
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

//Função do formulário
function enviar_contato(){
    function contemApenasNumeros(texto) {
        return /^[0-9]+$/.test(texto);
    }    
    var nome = document.getElementById("Nome").value
    var tel = document.getElementById("Tel").value
    var email = document.getElementById("E-mail_contato").value
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome != "" && tel != "" && email != ""){
        if (regex.test(email) && contemApenasNumeros(tel) ) {
            alert("Contato enviado com sucesso!! ✅")
            window.location.href = "index.html"
        } else {
            alert("Contato inválido ❌");
        }


    }else{
        alert("Existem campos não preenchidos")
    }
}