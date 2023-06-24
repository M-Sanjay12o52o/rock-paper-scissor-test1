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
let playerSelection = '';
let psScore = 0;
let csScore = 0;
let totalRounds = 0;
const winningScore = 5;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
let roundResult = document.getElementById('roundResult');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const winner = document.getElementById('winner');


rockBtn.addEventListener('click', handleClick);
paperBtn.addEventListener('click', handleClick);
scissorsBtn.addEventListener('click', handleClick);



function handleClick(event) {
  if (psScore < winningScore && csScore < winningScore) {
   const buttonValue = event.target.innerHTML;
  playerSelection = buttonValue;
  computerSelection = getComputerChoice();
  const round = playRound(playerSelection, computerSelection);
  roundResult.textContent = round;
  console.log(round);
  updateScores();
    totalRounds++;
    checkWinner();
  }
}


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
  playerScoreDisplay.textContent = psScore;
  computerScoreDisplay.textContent = csScore;
}

function checkWinner() {
  if (psScore >= winningScore) {
    winner.textContent = "Congratulations! You won!";
    disableButtons();
  } else if (csScore >= winningScore) {
    winner.textContent = "Computer Wins! Better luck next time.";
    disableButtons();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}
