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

console.log(getCompuerChoice());