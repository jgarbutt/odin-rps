function computerPlay(){
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice == 1){
        return "paper";
    }
    
    else if (choice == 2){
        return "rock";
    }

    else {
        return "scissors";
    }

}

function letsPlay(playerSelection, computerSelection){
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats rock"
    }
    else if (playerSelectionLower == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats scissors"
    }
    else if (playerSelectionLower == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats paper"
    }
    else if (playerSelectionLower == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats scissors"
    }
    else if (playerSelectionLower == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats paper"
    }
    else if (playerSelectionLower == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock"
    }
    else {
        return "It's a tie! Try again"
    }
}

function game(){
    for (let n = 0; n < 5; n++){
        let playerAnswer = prompt("enter rock, paper, or scissors", " ");
        console.log(letsPlay(playerAnswer, computerPlay()));
        console.log(playerAnswer);
    }
    return;
}

console.log(game());

// const playerSelection = "rOck";
// const computerSelection = computerPlay();

// console.log(letsPlay(playerSelection, computerSelection));