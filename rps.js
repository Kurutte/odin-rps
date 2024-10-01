console.log("If you see this, you're in the right place!");

function getComputerChoice() {
    let choice = Math.random() * 10;
    if(choice <= 3) {
        return "rock";
    }
    else if(choice <= 6) {
        return "paper";
    }

    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Throw rock, paper, or scissors").toLowerCase();
    let needUserChoice = true;

    while(needUserChoice) {
        if(choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            needUserChoice = false;
        } else {
            choice = prompt("That's not allowed! Try again (rock, paper, or scissors)").toLowerCase();
        }
    }

    return choice;
}

function playGame() {
    let humanScore = 0, computerScore = 0, tiedCount = 0;

    function playRound(evt) {

        let computerChoice = getComputerChoice();
        let humanChoice = evt.currentTarget.id;

        if((humanChoice === 'rock' && computerChoice === 'scissors') ||
           (humanChoice === 'paper' && computerChoice === 'rock') ||
           (humanChoice === 'scissors' && computerChoice === 'paper'))  {
    
            resultsScreen.textContent = "Aww, you won! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".";
            humanScore += 1;
            if( humanScore === 5) {
                endGame('Player');
            }
        } else if((humanChoice === 'rock' && computerChoice === 'paper') || 
                  (humanChoice === 'paper' && computerChoice === 'scissors') || 
                  (humanChoice === 'scissors' && computerChoice === 'rock') )  {
    
            resultsScreen.textContent = "Haha, you lost! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".";
            computerScore += 1;
            if(computerScore === 5) {
                endGame('I, the Computer,');
            }
        } else {
            resultsScreen.textContent = "Argh, tied! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " is the same as " + humanChoice + ".";
            tiedCount += 1;
        }

        resultsScreen.textContent += " Player: " + humanScore + ", Computer: " + computerScore + ", Ties: " + tiedCount;
    }

    function endGame(winner) {
        resultsScreen.textContent = winner + " WON! GGS, reload to try again!";
        container.removeChild(buttons);
    }

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener('click', playRound);
    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener('click', playRound);
    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener('click', playRound);

    const container = document.querySelector(".container");
    const buttons = document.querySelector(".buttons");
    const resultsScreen = document.querySelector(".results");
    resultsScreen.textContent = " Player: " + humanScore + ", Computer: " + computerScore + ", Ties: " + tiedCount;
}

playGame();