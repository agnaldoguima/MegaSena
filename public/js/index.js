
// #region Variáveis
const numerosApostados = [];
const resultado = [];
let valorAposta = 0;
let qtdAcertos= 0;
// #endregion

// #region Desabilita o botão apostar
const btnApostar = document.getElementById("btnApostar");
btnApostar.disabled = true;
// #endregion

// #region Chama a função que sorteia os números
sortearNumeros();
// #endregion

// #region Alterar Tema

// Obtenha a entrada de alternância do tema
const themeToggle = document.querySelector(
    '.switch input[type="checkbox"]'
  );
// Função que irá mudar o tema com base em se a alternância do tema está marcada ou não
function switchTheme(e) {
    if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    } else {
    document.documentElement.setAttribute("data-theme", "light");
    }
}
// Adicione um ouvinte de evento ao alternador de tema, o que mudará o tema
themeToggle.addEventListener("change", switchTheme, false);

// Obtenha o tema atual do armazenamento local
const currentTheme = localStorage.getItem("theme");
// se o item de armazenamento local atual pode ser encontrado
if (currentTheme) {
//  Defina o atributo body data-theme para corresponder ao item de armazenamento local
document.documentElement.setAttribute("data-theme", currentTheme);
// Se o tema atual estiver escuro, verifique a alternância do tema
if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
}

// #endregion

// #region Funçoes
function sortearNumeros(){
    // sorteando os números do jogo
    for(i = 0; i < 6; i++){
        let nomeroSorteado = Math.round(Math.random() * 59 + 1 );

        // verifica se o número sorteado exite na lista, enquanto exixtir ele vai sortear um nopvo número
        while(resultado.includes(nomeroSorteado)){
            let nomeroSorteado = Math.round(Math.random() * 59 + 1 );
        }
        resultado.push(nomeroSorteado);// insere o número sorteado na lista
    }   
}

function selecionarNumeros(numero){
   if(numerosApostados.length >= 0 && numerosApostados.length < 15){
        // adiciona o número na lista
        numerosApostados.push(numero);

        //desabilita o numero escolhido
        desabilitarNumeroEscolhido(numero);

        // habilita o botão apostar
        if(numerosApostados.length > 5){
            btnApostar.disabled = false;

            // mostra o valor da aposta
            valorDaAposta();
        }

        // mostrar quantidade de números apostados
        const qtdApostas = document.getElementById("qtdNumeros");
        qtdApostas.innerHTML = "<p>Qtd Números</p><p class='valor'>" + numerosApostados.length + "</p>";
   }
}

function desabilitarNumeroEscolhido(numero){
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#ffffff";
}

function valorDaAposta(){
    switch(numerosApostados.length){
        case 6:
            valorAposta = "R$ 4,50"
            break;
        case 7:
            valorAposta = "R$ 31,50"
            break;
        case 8:
            valorAposta = "R$ 126,00"
            break;
        case 9:
            valorAposta = "R$ 378,00"
            break;
        case 10:
            valorAposta = "R$ 945,00"
            break;
        case 11:
            valorAposta = "R$ 2.079,00"
            break;
        case 12:
            valorAposta = "R$ 4.158,00"
            break;
        case 13:
            valorAposta = "R$ 6.006,00"
            break;
        case 14:
            valorAposta = "R$ 10.510,50"
            break;
        case 15:
            valorAposta = "R$ 17.517,50"
            break;
        default:
            valorAposta = "R$ 0,00"
            break;
    }
    const divValorAposta = document.getElementById("valor");
    divValorAposta.innerHTML = "<p>valor da Aposta</p><p class='valor'>" + valorAposta + "</p>";
}

function apostar(){
    // fazer a aposta - compara os números sorteados com os apostados
    for(i = 0; i < numerosApostados.length; i++){
        if(resultado.includes(numerosApostados[i])){
            qtdAcertos++;
        }

        // for(j = 0; j < resultado.length; j++){
        //     if(numerosApostados[i] == resultado[j]){
        //         qtdAcertos++;
        //     }
        // }
    }
    // mostrar o resultado
    const divResultado = document.getElementById("resultado");
    for(i = 0; i < resultado.length; i++){
        divResultado.innerHTML += "<div class='resultadoCircle'>"+ resultado[i] +"</div>";
    }

    // Mostrar a quantidade de acertos
    let divAcertos = document.getElementById("acertos")
    divAcertos.innerHTML = "<p>Acertos</p><p class='valor'>" + qtdAcertos + "</p>"

    // desabilitar todos os botões
    desabilitarTodosNumeros();

    // habilitar o botão reiniciar
    document.getElementById("btnReiniciar").style.display = 'inline';
}

function desabilitarTodosNumeros(){
    for(i = 1; i <= 60; i++){
        document.getElementById("num_"+ i).disabled= true;
    }
}

let btn = document.querySelector("#btnReiniciar");
btn.addEventListener("click", function(){
    location.reload();
});

function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      
      // Defina a preferência de tema do usuário como escuro
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      
      // Defina a preferência de tema do usuário como claro
      localStorage.setItem("theme", "light");
    }
}
// #endregion
