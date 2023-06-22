// function getCompuerChoice() {
//   let ans = '';
//   let num = 0;
//   num = Math.floor((Math.random() * 3));
//   if (num == 0) {
//     ans = "rock";
//   } else if (num == 1) {
//     ans = "paper"; 
//   } else if (num == 2) {
//     ans = "scissors";
//   }
//   return ans;
// }

// console.log(getCompuerChoice());

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();

  if (ps === cs) {
    return "It's a Tie!";
  } else if (ps == 'rock' && cs == 'paper') {
    return "You Lose! Paper beats Rock"; 
  } else if (ps == 'paper' && cs == 'scissors') {
    return "You Lose! Scissors beats Paper"
  }
}

console.log(playRound('ROCK', 'PAPER'));