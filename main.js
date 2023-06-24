// Computer's Choice Function

function getCompuerChoice() {
  let ans = '';
  let num = 0;
  num = Math.floor((Math.random() * 3));
  if (num == 0) {
    ans = "rock";
  } else if (num == 1) {
    ans = "paper"; 
  } else if (num == 2) {
    ans = "scissors";
  }
  return ans;
}

let computerSelection = getCompuerChoice(); 
// console.log(computerSelection);

// Playround  Function

let psScore = 0;
let csScore = 0;

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();

  if (ps === cs) {
    return "It's a Tie!";
  } else if (ps == 'rock' && cs == 'paper') {
    csScore += 1;
    return "You Lose! Paper beats Rock"; 
  } else if (ps == 'rock' && cs == 'scissors') {
    csScore += 1;
    return "You Lose! Scissors beats Paper"
  } else if (ps == 'paper' && cs == 'rock') {
    psScore += 1;
    return "You Win. Paper Covers Rock"
  } else if (ps == 'paper' && cs == 'scissors') {
    csScore += 1;
    return "You Lose! Scissors cuts Paper"
  } else if (ps == 'scissors' && cs == 'paper') {
    psScore += 1;
    return "You Win. Scissors cuts Paper"
  } else if (ps == 'scissors' && cs == 'rock') {
    csScore += 1;
    return "You Lose! Rock beats Scissors"
  }

  return csScore, psScore;
}

// const rockInp = document.getElementById('rock').innerHTML;
// const paperInp = document.getElementById('paper').innerHTML;
// const scissorsInp = document.getElementById('scissors').innerHTML;

// console.log(rockInp);
// console.log(paperInp);
// console.log(scissorsInp);

function userInput(buttonId) {
  if (buttonId === 'rock') {
    return 'rock';
  } else if (buttonId === 'paper') {
    return 'paper';
  } else if (buttonId === 'scissors') {
    return 'scissors';
  }
}

let playerSelection = userInput(buttonId);

document.getElementById('rock').addEventListener('click', function() {
  userInput('rock');
});

document.getElementById('paper').addEventListener('click', function() {
  userInput('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  userInput('scissors');
});

// console.log(playRound('rock', computerSelection));
// console.log(playRound('paper', computerSelection));
// console.log(playRound('scissors', computerSelection));
// console.log(playRound('scissors', computerSelection));
// console.log(playRound('paper', computerSelection));

console.log("Computer's Score: ", csScore);
console.log("Your Score: ", psScore);

//Final Result
function finalResult() {
  if (csScore > psScore) {
    console.log("You Lose. " + "Final Scores: " + "Computers - " + csScore + ". Your's - " + psScore);
  } else if(psScore > csScore) {
    console.log("You WIN.b" + "Final Scores: " + "Computers - " + csScore + ". Your's - " + psScore);
  } else {
    console.log("It's a TIE. " + "Final Scores: " + "Computers - " + csScore + ". Your's - " + psScore);
  }
}

console.log(finalResult());

// console.log(playRound('ROCK', computerSelection));

// Function GAME



// console.log(game());