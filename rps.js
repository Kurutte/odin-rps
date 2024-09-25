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
    let humanScore = 0, computerScore = 0;

    function playRound(computerChoice, humanChoice) {

        if((humanChoice === 'rock' && computerChoice === 'scissors') ||
           (humanChoice === 'paper' && computerChoice === 'rock') ||
           (humanChoice === 'scissors' && computerChoice === 'paper'))  {
    
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            humanScore += 1;
        } else if((humanChoice === 'rock' && computerChoice === 'paper') || 
                  (humanChoice === 'paper' && computerChoice === 'scissors') || 
                  (humanChoice === 'scissors' && computerChoice === 'rock') )  {
    
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            computerScore += 1;
        } else {
            console.log("Tied! " + computerChoice + " is the same as " + humanChoice);
        }
    }

    for(index = 0; index < 5; index++)
        {
            playRound(getComputerChoice(), getHumanChoice());
        }

    console.log("Human Score: " + humanScore + ", Computer Score: " + computerScore )
}

playGame();