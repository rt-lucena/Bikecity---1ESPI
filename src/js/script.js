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

//Função do Contato
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

//Função do login
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

//Quiz
function startQuiz() {
    var score = 0;

    var questions = [
    "Qual é a maior marca de bicicletas do mundo?",
    "Qual é a cor mais comum para uma bicicleta?",
    "Qual é o recorde mundial de velocidade em uma bicicleta?",
    "Qual é o nome da bicicleta usada em corridas de estrada?",
    "Qual é o nome da bicicleta usada em trilhas de montanha?",
    "Qual é o nome da bicicleta com uma roda grande na frente e uma pequena atrás?",
    "Qual é o nome da competição de ciclismo mais famosa do mundo?",
    "Qual é o material mais comum usado para fazer quadros de bicicleta?",
    "Qual é o nome da bicicleta que permite que duas pessoas pedalem juntas?",
    "Qual é o nome do dispositivo que muda as marchas em uma bicicleta?"
];

    var answers = [
    "Giant",
    "Preto",
    "133.78 km/h",
    "Bicicleta de corrida",
    "Mountain bike",
    "Penny-farthing",
    "Tour de France",
    "Alumínio",
    "Tandem",
    "Desviador"
    ];

    for (var i = 0; i < questions.length; i++) {
        var response = prompt(questions[i]);
        if (response == answers[i]) {
            score++;
        }
    }

    alert("Você acertou " + score + " de " + questions.length + " perguntas!");
}