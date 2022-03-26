let validMove = ["rock", "paper", "scissors"];
let bestOf = 5;
let playerScore = 0;
let computerScore = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function isMemberOf(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return true;
        }
    }
    return false;
}

function getElement(index, array) {
    if (index >= array.length) {
        return array.at(index-array.length);
    }
    else {
        return array.at(index);
    }
}

function capitalize(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();    
}

function playerPlay() {
    let playerChoice=prompt("Please input your choice (Rock, Paper, Scissors): ").toLowerCase();
    while (!isMemberOf(playerChoice, validMove)) {
        playerChoice=prompt("Please input valid choice (Rock, Paper, Scissors): ").toLowerCase();
    }
    console.log(`Player choice: ${capitalize(playerChoice)}`);
    return validMove.indexOf(playerChoice);
}

function computerPlay() {
    let choice = getRandomInt(0, 3);
    switch(choice) {
        case 0:
            console.log("Computer choice: Rock");
            break;
        case 1:
            console.log("Computer choice: Paper");
            break;
        case 2:
            console.log("Computer choice: Scissors")
            break;
    }
    return choice;   
}

function playRound() {
    let playerChoice = playerPlay();
    let computerChoice = computerPlay();
    if (getElement(playerChoice-1, validMove) === getElement(computerChoice, validMove)) {
        playerScore++;
        console.log(`You win! Current score (Player-Computer): ${playerScore}-${computerScore}`);
    }
    else if (getElement(playerChoice+1, validMove) === getElement(computerChoice, validMove)) {   
        computerScore++;
        console.log(`You lose! Current score (Player-Computer): ${playerScore}-${computerScore}`);
    }
    else {
        console.log(`It's a draw! Current score (Player-Computer): ${playerScore}-${computerScore}`);    
    }
    console.log("----------------------------------------------------------");
}

function game() {
    console.log("----------------------------------------------------------");
    console.log("MAXIMUM RPS");
    console.log("----------------------------------------------------------");  
    for (let i = 0; i < bestOf; i++) {
        console.log(`Game ${i+1}!`);
        playRound();
    }
    if (playerScore > computerScore) {
        console.log(`You win the game! Final score (Player-Computer): ${playerScore}-${computerScore}`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lost! Try again next time! Final score (Player-Computer): ${playerScore}-${computerScore}`);
    }
    else {
        console.log(`The game is a draw! Final score (Player-Computer): ${playerScore}-${computerScore}`);
    }
}

game();