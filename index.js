
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

const btDice1 = document.getElementById("buttonDice1");
const btDice2 = document.getElementById("buttonDice2");

const restart = document.getElementById("buttonRestart");

const round = document.getElementById("round");
var roundNumber = 0;

const roundWinner =  document.getElementById("roundWinner");
var sumDice1 = 0;
var sumDice2 = 0;

const winner = document.getElementById("vencedor");

function end (sumDice1, sumDice2) {
    if (sumDice1 > sumDice2){
        winner.innerHTML = "O vencedor foi o dado 1! :)";
    }
    else if (sumDice2 > sumDice1){
        winner.innerHTML = "O vencedor foi o dado 2! :)";
    }
    else {
        winner.innerHTML = "Empate"
    }

    btDice1.disabled = true;
    btDice2.disabled = true;
} 

function rounds (dice1Value, dice2Value) {
    roundNumber++;
    round.innerHTML = roundNumber;
    
    if (dice1Value > dice2Value) {
        roundWinner.innerHTML = `O vencedor da rodada ${roundNumber} foi o dado 1`
    }
    else if (dice2Value > dice1Value) {
        roundWinner.innerHTML = `O vencedor da rodada ${roundNumber} foi o dado 2`
    }
    else {
        roundWinner.innerHTML = `A rodada ${roundNumber} empatou!`
    }

    if (roundNumber < 10) {
        sumDice1 += dice1Value;
        sumDice2 += dice2Value;
    }

    else if (roundNumber == 10) {
        end(sumDice1, sumDice2);
    }
};

var dice1Value;
const handlebtDice1Click = () => {
    dice1Value = Math.floor(Math.random() * 6) + 1;

    dice1.innerHTML = dice1Value;
  
    btDice1.disabled = true;
    btDice2.disabled = false;
};

const handlebtDice2Click = () => {
    const dice2Value = Math.floor(Math.random() * 6) + 1;
  
    dice2.innerHTML = dice2Value;
  
    btDice1.disabled = false;
    btDice2.disabled = true;

    rounds (dice1Value, dice2Value);
};

const handlerestartClick = () => {  
    sumDice1 = 0;
    sumDice2 = 0;

    roundWinner.innerHTML = "";

    roundNumber = 0;
    round.innerHTML = roundNumber;

    winner.innerHTML = "";

    dice1.innerHTML = "-";
    dice2.innerHTML = "-";

    btDice1.disabled = false;
} 

btDice1.onclick = handlebtDice1Click;
btDice2.onclick = handlebtDice2Click;
restart.onclick = handlerestartClick;