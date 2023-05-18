function getComputerChoice(){
    let rps = "";
    let choice = Math.floor(Math.random()* 3)+1
    switch(choice){
        case 1:
            rps = "rock";
            break;
        case 2:
            rps = "paper";
            break;
        case 3:
            rps = "scissors";
            break;
    }
    return rps
}
function winner(playerSelection, computerChoice){
    if (playerSelection === "rock" && computerChoice == "paper"){
        console.log("You Lose! Paper beats Rock.");
        return "computer";
    }
    else if(playerSelection === "rock" && computerChoice === "rock"){
        console.log("It's a draw!");
        return "draw";
    }
    else if(playerSelection === "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock beats Scissors!");
        return "player";
    }
    else if(playerSelection === "paper" && computerChoice === "rock"){
        console.log("You Win! Paper beats Rock.");
        return "player";
    }
    else if(playerSelection === "paper" && computerChoice == "paper"){
        console.log("It's a draw!");
        return "draw";
    }
    else if(playerSelection === "paper" && computerChoice === "scissors"){
        console.log("You Lose! Scissors beats Paper.");
        return "computer";
    }
    else if(playerSelection === "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beats Paper.");
        return "player";
    }
    else if(playerSelection === "scissors" && computerChoice === "rock"){
        console.log("You Lose! Rock beats Scissors.");
        return "computer";
    }
    else if(playerSelection === "scissors" && computerChoice == "scissors"){
        console.log("It's a draw!");
        return "draw";
    }
    else{
        return "not working"
    }
}
function game(){
    let playerScore = 0;
    let computerScore =0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        playerSelection = playerSelection.toLowerCase();
        let computerChoice = getComputerChoice();
        let real_winner = winner(playerSelection,computerChoice);
        console.log(real_winner);
        if(real_winner === "player"){
            playerScore++;
        }
        else if(real_winner === "computer"){
            computerScore++;
        }
        console.log(playerScore);
        console.log(computerScore);
    }
    if(playerScore > computerScore){
        console.log("The Player has won the majority of games.")
    }
    else if(playerScore <computerScore){
        console.log("The computer has won the majority of games.")
    }
    else{
        console.log("It's a tie.")
    }
}
game();