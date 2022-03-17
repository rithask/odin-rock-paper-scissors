function computerPlay() {
    let random = Math.floor(Math.random(3) * 3);
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[random];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let res, win = 0;

    if (playerSelection == computerSelection) {
        res = "Draw!";
    }

    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            res = "You Lose! Paper beats Rock";
        }

        else if (computerSelection == "Scissors") {
            res = "You Won! Rock beats Scissors";
            win = 1;
        }
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            res = "You Won! Paper beats Rock";
            win = 1;
        }

        else if (computerSelection == "Scissors") {
            res = "You Lose! Scissors beats Paper";
        }
    }

    else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            res = "You Won! Scissors beats Paper";
            win = 1;
        }

        else if (computerSelection == "Rock") {
            res = "You Lose! Rock beats Scissors";
        }
    }

    return [res, win];
}

function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Papers or Scissors?");
        let res = playRound(playerSelection, computerPlay());

        if (res[1] == 1) {
            score++;
        }

        console.log(res[0]);
        console.log("Your score: " + score);
    }
}