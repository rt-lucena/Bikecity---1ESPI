
//Função que muda a cor do site
var cores = ['slategray', 'white', 'olivedrab'];
var corAtual = 0;

function mudarCor() {
    document.body.style.backgroundColor = cores[corAtual % cores.length];
    corAtual++;
}
//
function teste_log(){
    var log = document.getElementById("e-mail").value;
    var pass = document.getElementById("password").value;
    if(log != "" && pass != ""){
        if (log == 'feliciano@gmail.com' && pass == '12345678'){
            alert("Dados validados\nBem vindo novamente")
            window.location.href = "quiz.html"

        }
        else{
            alert("E-mail ou senha incorreta")
        }
    }else{
        alert("Campos não preenchindos")
    }
}

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

//SLIDESHOW
let imagens=['./src/assets/Bicicleta1.jpg','./src/assets/Bicicleta2.jpg','./src/assets/Bicicleta3.jpg','./src/assets/Bicicleta4.jpg'];
let index = 0;
let time = 3000;

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