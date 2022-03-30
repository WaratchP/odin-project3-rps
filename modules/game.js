function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getElement(index, array) {
    let output = index >= array.length ? array.at(index-array.length)
               : array.at(index);
    return output;
}

function capitalize(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();    
}

function computerPlay() {
    return getRandomInt(0, 3);   
}

function playRound(playerSelect, score) {   
    let validMove = ["rock", "paper", "scissors"];
    let playerChoice = validMove.indexOf(playerSelect);
    let computerChoice = computerPlay();
    if (getElement(playerChoice-1, validMove) === getElement(computerChoice, validMove)) {
        return [score[0]+1, score[1]];
    }
    else if (getElement(playerChoice+1, validMove) === getElement(computerChoice, validMove)) {   
        return [score[0], score[1]+1];
    }
    else {
        return score;
    }
}

function createButton(buttonClass, buttonId) {
    const button = document.createElement('button');
    button.classList.add(buttonClass);
    button.id = buttonId
    button.textContent = `${capitalize(buttonId)}`;
    return button;
}

export function game() {
    let score = [0, 0]
    let gameNo = 1

    const divContainerHeader = document.querySelector('.containerHeader');
    const divContainerButton = document.querySelector('.containerButton');

    const h1Header = document.createElement('h1');
    h1Header.textContent = 'Maximum RPS';

    const h3GameNo = document.createElement('h3');
    h3GameNo.textContent = `${gameNo}`
    const pScore = document.createElement('p');
    pScore.textContent = `${score[0]} : ${score[1]}`

    const buttonRock = createButton('choiceButton', 'rock');
    const buttonPaper = createButton('choiceButton', 'paper');
    const buttonScissors = createButton('choiceButton', 'scissors');

    divContainerHeader.appendChild(h1Header);
    divContainerHeader.appendChild(h3GameNo);
    divContainerHeader.appendChild(pScore);

    divContainerButton.appendChild(buttonRock);
    divContainerButton.appendChild(buttonPaper);
    divContainerButton.appendChild(buttonScissors);

    let onClick = () => {
        score = playRound(self.id, score);
        gameNo++;
        h3GameNo.textContent = `Game: ${gameNo}`
        pScore.textContent = `${score[0]} : ${score[1]}`
        if (score[0] >= 5 || score[1] >= 5) {
            let output = score[0] == 5 ? 'You win!'
                       : 'You lose!';
            h3GameNo.textContent = output;
            for(let i = 0; i < buttons.length; i++) {
                buttons[i].removeEventListener('click', onClick);
            }
        }
    }

    let buttons = document.getElementsByClassName('choiceButton');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', onClick);
    }
}