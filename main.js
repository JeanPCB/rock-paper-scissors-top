let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
   let randNum = generateRandNum(1, 9);
   if (randNum >= 1 && randNum <= 3) {
      return "rock";
   } else if (randNum >= 4 && randNum <= 6) {
      return "paper";
   } else if (randNum >= 7 && randNum <= 9) {
      return "scissors";
   } else {
      return "Invalid input!";
   }
}

function getHumanChoice() {
   const choice = prompt("Rock, paper or scissors?");
   return choice;
}

function generateRandNum(includedMin, includedMax) {
   return Math.floor(Math.random() * (includedMax - includedMin + 1)) + 1;
}