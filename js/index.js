const numerosApostados = [];
const resultado = [];
let valorAposta = 0;
let qtdAcertos= 0;

const btnApostar = document.getElementById("btnApostar");
btnApostar.disabled = true;

sortearNumeros();

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
