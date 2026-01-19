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
   let choice = prompt("Type your play:\n1 - Rock\n2 - Paper\n3 - Scissors");
   choice = Number(choice);
   
   switch (choice) {
      case 1:
         return "rock";
      case 2:
         return "paper";
      case 3:
         return "scissors";
      default:
         return "Invalid choice!";
   }
}

function generateRandNum(includedMin, includedMax) {
   return Math.floor(Math.random() * (includedMax - includedMin + 1)) + 1;
}