/**
* Declare constants for DOM elements
*/
const playerDiv = document.querySelector("#playerDiv");
const computerDiv = document.querySelector("#computerDiv");
const resultDiv = document.querySelector("#resultDiv");
const scoreDiv = document.querySelector("#scoreDiv")
const controlBtns = document.querySelectorAll(".controlBtn");

let player;
let computer;
let result;
let score;

controlBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent
    computersTurn();
    playerDiv.textContent = `Player: ${player}`;
    computerDiv.textContent = `Computer: ${computer}`;
    resultDiv.textContent = checkWin();
}));

function computersTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;       
    }
}

function checkWin(){
    if(player === computer){
        return "Draw";
    }
    else if(computer === "Rock"){
        return (player === "Paper") ? "You Win" : "You Lose"
    }
    else if(computer === "Paper"){
        return (player === "Scissors") ? "You Win" : "You Lose"
    }
    else if(computer === "Scissors"){
        return (player === "Rock") ? "You Win" : "You Lose"
    }
}