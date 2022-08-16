/**
* Declare constants for DOM elements
*/
const playerDiv = document.querySelector("#playerDiv");
const computerDiv = document.querySelector("#computerDiv");
const resultDiv = document.querySelector("#resultDiv");
const scoreDiv = document.querySelector("#scoreDiv")
const controlBtns = document.querySelectorAll(".controlBtn");
const yourScore = document.querySelector("you");
const compScore = document.querySelector("comp");

let player;
let computer;

/**
* Adds event listeners for control buttons, then calls
* functions to generate computers choice and decide winner
*/
controlBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent
    computersTurn();
    playerDiv.textContent = `Player: ${player}`;
    computerDiv.textContent = `Computer: ${computer}`;
    resultDiv.textContent = checkWin();
    incrementYourScore();
    incrementCompScore();
    yourScore.textContent = `You: ${yourNewScore}`;
    compScore.textContent = `Comp: ${compNewScore}`;
}));

/**
* Generates the computers choice
*/
function computersTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "✊";
            break;
        case 2:
            computer = "🤚";
            break;
        case 3:
            computer = "✌";
            break;       
    }
}

/**
* checks to see who winner is, then gives string to
* resultDiv
*/
function checkWin(){
    if(player === computer){
        return "Draw";
    }
    else if(computer === "✊"){
        return (player === "🤚") ? "You Win" : "You Lose"
    }
    else if(computer === "🤚"){
        return (player === "✌") ? "You Win" : "You Lose"
    }
    else if(computer === "✌"){
        return (player === "✊") ? "You Win" : "You Lose"
    }
}

/**
* Function to tally user's score
*/

function incrementYourScore(){
    if(resultDiv.textContent == "You Win"){
        let yourNewScore = parseInt(document.getElementById("you").textContent);
        document.getElementById("you").innerText = ++yourNewScore;
    }
}  

/**
* Function to tally computer's score
*/
function incrementCompScore(){
    if(resultDiv.textContent == "You Lose"){
        let compNewScore = parseInt(document.getElementById("comp").textContent);
        document.getElementById("comp").innerText = ++compNewScore;
    }
}  
    
