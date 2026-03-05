import {
  playsBtns,
  setPlayDisplay,
  setPlayDisplayColor,
  updateScoreDisplay,
  showFinalResult,
} from "./uiEvents.js";

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
    const winner = playRound(computerPlay, humanPlay);
    const ANIMATION_DURATION = 2000;

    setPlayDisplayColor(computerDisplayContent, "white");
    setPlayDisplayColor(playerDisplayContent, "white");

    setPlayDisplay(humanPlay, playerDisplayContent);
    setPlayDisplay(computerPlay, computerDisplayContent);

    setTimeout(() => {
      if (winner === "player") {
        setPlayDisplayColor(playerDisplayContent, "lightgreen");
        setPlayDisplayColor(computerDisplayContent, "crimson");
      } else if (winner === "computer") {
        setPlayDisplayColor(computerDisplayContent, "lightgreen");
        setPlayDisplayColor(playerDisplayContent, "crimson");
      } else {
        setPlayDisplayColor(computerDisplayContent, "white");
        setPlayDisplayColor(playerDisplayContent, "white");
      }

      updateScoreDisplay(playerScoreDisplay, playerScore);
      updateScoreDisplay(computerScoreDisplay, computerScore);

      showFinalResult(playerScore, computerScore, 3);
    }, ANIMATION_DURATION);
  }),
);

function playRound(computerChoice, humanChoice) {
  let winner = null;

  switch (computerChoice) {
    case "rock":
      if (humanChoice === "paper") {
        winner = "player";
        playerScore++;
      } else if (humanChoice === "scissors") {
        winner = "computer";
        computerScore++;
      }
      break;

    case "paper":
      if (humanChoice === "scissors") {
        winner = "player";
        playerScore++;
      } else if (humanChoice === "rock") {
        winner = "computer";
        computerScore++;
      }
      break;

    case "scissors":
      if (humanChoice === "rock") {
        winner = "player";
        playerScore++;
      } else if (humanChoice === "paper") {
        winner = "computer";
        computerScore++;
      }
      break;

    default:
      return null;
  }

  return winner;
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
