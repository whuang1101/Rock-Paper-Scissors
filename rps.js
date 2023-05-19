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
let playerScore = 0;
let computerScore =0;
const div = document.createElement("div");
div.classList.add("score-board");

let imageOne = document.createElement("img");
imageOne.src = "./images/rock_paper_scissors.jpeg"
imageOne.height = 300;
const imagesDiv = document.querySelector(".images");
imagesDiv.append(imageOne)

const title = document.createElement("h1");
title.textContent = "Scoreboard!";
div.append(title);

const splitDiv = document.createElement("div");
splitDiv.classList.add("split");
div.append(splitDiv);

const splitDivOne = document.createElement("div");
const splitDivTwo = document.createElement("div");
splitDiv.append(splitDivOne);
splitDiv.append(splitDivTwo);

const playerScoreCounter = document.createElement("div");
playerScoreCounter.textContent =("Player score: 0");
splitDivOne.append(playerScoreCounter);

const computerScoreCounter = document.createElement("div");
computerScoreCounter.textContent =("Computer score: 0");
splitDivOne.append(computerScoreCounter);
document.body.append(div);

const playerImage = document.createElement("img");
playerImage.src = "./images/rock_paper_scissors.jpeg";
playerImage.classList.add("player_image");
const computerImage = document.createElement("img");
computerImage.src = "./images/rock_paper_scissors.jpeg";
computerImage.classList.add("computer_image");
const player_vs_computer = document.querySelector(".player_vs_computer");
player_vs_computer.append(playerImage);
player_vs_computer.append(computerImage);

function imageToDisplay(player, computer,playerImage,computerImage){
    if (player === "rock"){
        playerImage.src = "./images/rock.jpeg"
    }
    else if (player === "paper"){
        playerImage.src = "./images/paper.jpeg"
    }
    else if (player === "scissors"){
        playerImage.src = "./images/scissors.jpeg"
    }
    if (computer === "rock"){
        computerImage.src = "./images/rock.jpeg"
    }
    else if (computer === "paper"){
        computerImage.src = "./images/paper.jpeg"
    }
    else if (computer === "scissors"){
        computerImage.src = "./images/scissors.jpeg"
    }
    playerImage.height = 300;
    computerImage.height = 300;
}
function addToDiv(div, string){
    const content = document.createElement("div");
    content.textContent = string;
    div.append(content);
}

function winner(playerSelection, computerChoice){
    if (playerSelection === "rock" && computerChoice == "paper"){
        addToDiv(splitDivTwo,"You Lose! Paper beats Rock.");
        imageToDisplay("rock","paper",playerImage,computerImage)
        return "computer";
    }
    else if(playerSelection === "rock" && computerChoice === "rock"){
        addToDiv(splitDivTwo,"It's a draw!");
        imageToDisplay("rock","rock",playerImage,computerImage);
        return "draw";
    }
    else if(playerSelection === "rock" && computerChoice == "scissors"){
        addToDiv(splitDivTwo,"You Win! Rock beats Scissors!");
        imageToDisplay("rock","scissors",playerImage,computerImage);
        return "player";
    }
    else if(playerSelection === "paper" && computerChoice === "rock"){
        addToDiv(splitDivTwo,"You Win! Paper beats Rock.");
        imageToDisplay("paper","rock",playerImage,computerImage);
        return "player";
    }
    else if(playerSelection === "paper" && computerChoice == "paper"){
        addToDiv(splitDivTwo,"It's a draw!");
        imageToDisplay("paper","paper",playerImage,computerImage);
        return "draw";
    }
    else if(playerSelection === "paper" && computerChoice === "scissors"){
        addToDiv(splitDivTwo,"You Lose! Scissors beats Paper.");
        imageToDisplay("paper","scissors",playerImage,computerImage);
        return "computer";
    }
    else if(playerSelection === "scissors" && computerChoice == "paper"){
        addToDiv(splitDivTwo,"You Win! Scissors beats Paper.");
        imageToDisplay("scissors","paper",playerImage,computerImage);
        return "player";
    }
    else if(playerSelection === "scissors" && computerChoice === "rock"){
        addToDiv(splitDivTwo,"You Lose! Rock beats Scissors.");
        imageToDisplay("scissors","rock",playerImage,computerImage);
        return "computer";
    }
    else if(playerSelection === "scissors" && computerChoice == "scissors"){
        addToDiv(splitDivTwo,"It's a draw!");
        imageToDisplay("scissors","scissors",playerImage,computerImage);
        return "draw";
    }
    else{
        return "not working"
    }
}
function game(playerChoice){
    let playerSelection = playerChoice;
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
    console.log(computerScore)
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
const rock = document.querySelector(".rock");

rock.addEventListener("click", () =>{
    if(playerScore < 5 && computerScore < 5){
    game("rock")
    playerScoreCounter.textContent = "Player score: " + playerScore
    computerScoreCounter.textContent = "Computer score: " + computerScore
    checkForWinner(playerScore,computerScore)
    show_reset();

}});
const paper = document.querySelector(".paper");
paper.addEventListener("click", () =>{
    if(playerScore < 5 && computerScore < 5){
    game("paper")
    playerScoreCounter.textContent = "Player score: " + playerScore
    computerScoreCounter.textContent = "Computer score: " + computerScore
    checkForWinner(playerScore,computerScore)
    show_reset();
}});
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () =>{
    if(playerScore < 5 && computerScore < 5){
    game("scissors")
    playerScoreCounter.textContent = "Player score: " + playerScore
    computerScoreCounter.textContent = "Computer score: " + computerScore
    checkForWinner(playerScore,computerScore)
    show_reset()
}});

function checkForWinner(playerScore,computerScore){
if(playerScore === 5){
    const winner = document.createElement("h1");
    winner.classList.add("winner");
    winner.textContent = "You have won!"
    div.append(winner);
}
else if(computerScore === 5){
    const winner = document.createElement("h1");
    winner.textContent = "The Computer has won!"
    winner.classList.add("winner");
    div.append(winner);
}
}
function show_reset(){
if(playerScore === 5 || computerScore === 5){
const reset = document.createElement("button");
reset.textContent = "Reset";
reset.addEventListener("click", ()=>{
    playerScore =0;
    computerScore =0;
    playerScoreCounter.textContent = "Player Score: " + playerScore;
    computerScoreCounter.textContent = "Computer Score: " + computerScore;
    playerImage.src = "./images/rock_paper_scissors.jpeg";
    computerImage.src ="./images/rock_paper_scissors.jpeg";
    while (splitDivTwo.firstChild) {
    splitDivTwo.firstChild.remove();
    }
    div.removeChild(reset);
    const winnerElement = document.querySelector(".winner");
    if (winnerElement) {
      winnerElement.remove();
    }

})
div.append(reset);
}
}
