function computerPlay () {
    const symbol = ['rock', 'paper', 'scissor'];
    const hand = symbol[Math.floor(Math.random() * symbol.length)]; 
    return hand; 
};

    let playerGameScore = 0;
    let computerGameScore = 0;


function playerPlay () {
    let playerHand = document.getElementById("playerChoice").value;
    return playerHand;
}    



for (let i=0; i<5; i++) {
    
    const playerSelection = playerPlay();
    
    const computerSelection = computerPlay();

    function playRound (){
        if (computerSelection === playerSelection) {
            result = "It's a draw, keep on playing!";
        }
        else if (computerSelection === "rock" && playerSelection === "paper") {
            result = "You won! Paper beats rock";
            playerGameScore = playerGameScore + 1;
        }
        else if (computerSelection === "scissor" && playerSelection === "rock") {
            result = "You won! Rock beats scissor";
            playerGameScore = playerGameScore + 1;
        }
        else if (computerSelection === "paper" && playerSelection === "scissor") {
            result = "You won! Scissor beats paper";
            playerGameScore = playerGameScore + 1;
        }
        else {
            result = "You lost this round :(";
            computerGameScore = computerGameScore + 1;
        }
        return result;
    };
    
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound());
    
};

console.log(playerGameScore);
console.log(computerGameScore);


