function getComputerChoice() {
  let ans = '';
  let num = Math.floor(Math.random() * 3);

  if (num === 0) {
    ans += 'rock';
  } else if (num === 1) {
    ans += 'paper';
  } else if (num === 2) {
    ans += 'scissors';
  }
  return ans;
}

let computerSelection;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', handleClick);
paperBtn.addEventListener('click', handleClick);
scissorsBtn.addEventListener('click', handleClick);

let playerSelection = '';

function handleClick(event) {
  const buttonValue = event.target.innerHTML;
  playerSelection = buttonValue;
  computerSelection = getComputerChoice();
  round = playRound(playerSelection, computerSelection);
  roundResult.textContent = round;
  console.log(round);
  updateScores();
}

let psScore = 0;
let csScore = 0;

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();

  if (ps === cs) {
    return "It's a Tie!";
  } else if (ps === 'rock' && cs === 'paper') {
    csScore += 1;
    return "You Lose! Paper beats Rock";
  } else if (ps === 'rock' && cs === 'scissors') {
    psScore += 1;
    return "You Win! Rock beats Scissors";
  } else if (ps === 'paper' && cs === 'rock') {
    psScore += 1;
    return "You Win! Paper beats Rock";
  } else if (ps === 'paper' && cs === 'scissors') {
    csScore += 1;
    return "You Lose! Scissors beats Paper";
  } else if (ps === 'scissors' && cs === 'paper') {
    psScore += 1;
    return "You Win! Scissors beats Paper";
  } else if (ps === 'scissors' && cs === 'rock') {
    csScore += 1;
    return "You Lose! Rock beats Scissors";
  }
}

function updateScores() {
  document.getElementById('playerScore').textContent = psScore;
  document.getElementById('computerScore').textContent = csScore;
}

let roundResult = document.getElementById('roundResult');
