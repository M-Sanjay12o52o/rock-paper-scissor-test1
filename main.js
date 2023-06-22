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
console.log(computerSelection);

// Playround  Function

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();

  if (ps === cs) {
    return "It's a Tie!";
  } else if (ps == 'rock' && cs == 'paper') {
    return "You Lose! Paper beats Rock"; 
  } else if (ps == 'rock' && cs == 'scissors') {
    return "You Lose! Scissors beats Paper"
  } else if (ps == 'paper' && cs == 'rock') {
    return "You Win. Paper Covers Rock"
  } else if (ps == 'paper' && cs == 'scissors') {
    return "You Lose! Scissors cuts Paper"
  } else if (ps == 'scissors' && cs == 'paper') {
    return "You Win. Scissors cuts Paper"
  } else if (ps == 'scissors' && cs == 'rock') {
    return "You Lose! Rock beats Scissors"
  }
}

console.log(playRound('ROCK', computerSelection));

