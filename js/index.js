import { playsBtns, setPlayDisplay, updateScoreDisplay } from "./uiEvents.js";

const playerDisplayContent = document.querySelector("#player-play-display");
const computerDisplayContent = document.querySelector("#computer-play-display");

const playerScoreDisplay = document.querySelector("#score-player");
const computerScoreDisplay = document.querySelector("#score-computer");

let playerScore = 0;
let computerScore = 0;

playsBtns.forEach((playBtn) =>
  playBtn.addEventListener("click", () => {
    const humanPlay = getHumanChoice(playBtn);
    const computerPlay = getComputerChoice();

    playRound(computerPlay, humanPlay);
    setPlayDisplay(humanPlay, playerDisplayContent);
    setPlayDisplay(computerPlay, computerDisplayContent);
    updateScoreDisplay(playerScoreDisplay, playerScore);
    updateScoreDisplay(computerScoreDisplay, computerScore);
  }),
);

function playRound(computerChoice, humanChoice) {
  switch (computerChoice) {
    case "rock":
      if (humanChoice === "paper") {
        playerScore++;
      } else if (humanChoice === "scissors") {
        computerScore++;
      }
      break;

    case "paper":
      if (humanChoice === "scissors") {
        playerScore++;
      } else if (humanChoice === "rock") {
        computerScore++;
      }
      break;

    case "scissors":
      if (humanChoice === "rock") {
        playerScore++;
      } else if (humanChoice === "paper") {
        computerScore++;
      }
      break;

    default:
      return null;
  }
}

function printScore() {
  console.log("Human Score: " + playerScore);
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

function getHumanChoice(button) {
  const choice = button.textContent.toLowerCase();
  return choice;
}

function generateRandNum(includedMin, includedMax) {
  return Math.floor(Math.random() * (includedMax - includedMin + 1)) + 1;
}
