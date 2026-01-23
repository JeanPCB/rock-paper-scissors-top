function playGame() {
   let humanScore = 0;
   let computerScore = 0;

   function playRound(computerChoice, humanChoice) {
      switch (computerChoice) {
         case "rock":
            if (humanChoice === "paper") {
               humanScore++;
               printResult(computerChoice, humanChoice, "win");
            } else if (humanChoice === "scissors") {
               computerScore++;
               printResult(computerChoice, humanChoice, "lose");
            } else {
               printResult(computerChoice, humanChoice, "draw");
            }
            break;

         case "paper":
            if (humanChoice === "scissors") {
               humanScore++;
               printResult(computerChoice, humanChoice, "win");
            } else if (humanChoice === "rock") {
               computerScore++;
               printResult(computerChoice, humanChoice, "lose");
            } else {
               printResult(computerChoice, humanChoice, "draw");
            }
            break;

         case "scissors":
            if (humanChoice === "rock") {
               humanScore++;
               printResult(computerChoice, humanChoice, "win");
            } else if (humanChoice === "paper") {
               computerScore++;
               printResult(computerChoice, humanChoice, "lose");
            } else {
               printResult(computerChoice, humanChoice, "draw");
            }
            break;

         default:
            return null;
      }
   }

   function printResult(computerChoice, humanChoice, result) {
      let resultPhrase = "That's a draw..."

      if (result === "win") {
         resultPhrase = `You ${result}! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
      } else if (result === "lose") {
         resultPhrase = `You ${result}! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
      }

      console.log(resultPhrase);
      printScore();
   }

   function printScore() {
      console.log("Human Score: " + humanScore);
      console.log("Computer Score: " + computerScore);
   }


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
      const choice = prompt("Rock, paper or scissors?").toLowerCase();
      return choice;
   }

   function generateRandNum(includedMin, includedMax) {
      return Math.floor(Math.random() * (includedMax - includedMin + 1)) + 1;
   }

   for (let i = 0; i < 5; i++) {
      playRound(getComputerChoice(), getHumanChoice());
   }
}
