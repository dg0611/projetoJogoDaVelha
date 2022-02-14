// Segunda Parte do Tabuleiro

let pontoss=0;
let VAZIO = {
    simbolo : "-"
}

let Tabuleiro = [
    [VAZIO,VAZIO,VAZIO],
    [VAZIO,VAZIO,VAZIO],
    [VAZIO,VAZIO,VAZIO]
];

function desenharTabuleiro(){
    limparTela();
    for(let linha =0;linha<3;linha++){
       for(let coluna =0;coluna<3;coluna++){
        criarBotaoTabuleiro(linha,coluna);
    }
    novaLinha();
    vencedor();
    
    
}
}
function novaLinha() {
    let br = document.createElement("br");
    document.querySelector("#tabuleiro").appendChild(br)
    //document.body.appendChild(br);
}
function criarBotaoTabuleiro(linha,coluna){
    let button = document.createElement("button");
        button.textContent = Tabuleiro[linha][coluna].simbolo;
        button.classList.add("botaoTabuleiro");
        button.onclick = function eventoFazerJogada() {
            fazerJogada(linha,coluna);
        }
       document.querySelector("#tabuleiro").appendChild(button);//parei aki na 3 parte do jogo
       
       
}

let jogadorX = {
    simbolo: 'X'
}
let jogadorO = {
    simbolo:'O'
}

let jogadaAtual = jogadorX;

function fazerJogada(linha,coluna){
   if (Tabuleiro[linha][coluna]=== VAZIO){
       Tabuleiro[linha][coluna] = jogadaAtual;
       desenharTabuleiro();
       proximaJogador();
       
   }else{
       alterarStatus()
       //alert("Ops Tente Em Outro Lugar!!")
   }
}

function proximaJogador(){
    if(jogadaAtual === jogadorX){
        jogadaAtual = jogadorO;
    }else if
        (jogadaAtual === jogadorO){

            jogadaAtual = jogadorX;
    }/*else{
        jogadorAtual = jogadorX;
        
    }*/
}



function limparTela(){
    document.querySelector("#tabuleiro").innerHTML = '';
   // document.body.innerHTML = "";
    //document.querySelector("#status").innerHTML =''//parei aki
   
}

function alterarStatus(){
   let msg  = document.getElementById("status")   //querySelector("#status")
  alert("Jogada Inválida")
  // msg.innerHTML = "Jogada Inválida !!"
    
}


function vencedor(){
  
    if(Tabuleiro[0][0].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[0][1].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[0][2].simbolo === jogadaAtual.simbolo ||

    Tabuleiro[1][0].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[1][1].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[1][2].simbolo === jogadaAtual.simbolo ||

    Tabuleiro[2][0].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[2][1].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[2][2].simbolo === jogadaAtual.simbolo ||

    Tabuleiro[0][0].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[1][0].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[2][0].simbolo === jogadaAtual.simbolo ||

    Tabuleiro[0][1].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[1][1].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[2][1].simbolo === jogadaAtual.simbolo ||

    Tabuleiro[0][2].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[1][2].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[2][2].simbolo === jogadaAtual.simbolo ||

    Tabuleiro[0][2].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[1][1].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[2][0].simbolo === jogadaAtual.simbolo ||

    Tabuleiro[0][0].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[1][1].simbolo === jogadaAtual.simbolo 
    && Tabuleiro[2][2].simbolo === jogadaAtual.simbolo)
     
    alert(jogadaAtual.simbolo + " é o Vencedor !!")
  }


  function ponto(){
      let point = document.getElementById("pontos")
      console.log(pontoss)
  }
      
  function empate() {

    if(Tabuleiro[0][0].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[0][1].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[0][2].simbolo != jogadaAtual.simbolo ||
    
        Tabuleiro[1][0].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[1][1].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[1][2].simbolo != jogadaAtual.simbolo ||
    
        Tabuleiro[2][0].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[2][1].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[2][2].simbolo != jogadaAtual.simbolo ||
    
        Tabuleiro[0][0].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[1][0].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[2][0].simbolo != jogadaAtual.simbolo ||
    
        Tabuleiro[0][1].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[1][1].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[2][1].simbolo != jogadaAtual.simbolo ||
    
        Tabuleiro[0][2].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[1][2].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[2][2].simbolo != jogadaAtual.simbolo ||
    
        Tabuleiro[0][2].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[1][1].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[2][0].simbolo != jogadaAtual.simbolo ||
    
        Tabuleiro[0][0].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[1][1].simbolo != jogadaAtual.simbolo 
        && Tabuleiro[2][2].simbolo != jogadaAtual.simbolo)
         
        alert(jogadaAtual.simbolo + " é o Vencedor !!")
      }

    
    
    


    