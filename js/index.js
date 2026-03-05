import {
  playsBtns,
  setPlayDisplay,
  setPlayDisplayColor,
  updateScoreDisplay,
  showFinalResult,
  toggleBtnDisabled,
} from "./uiEvents.js";

const playerDisplayContent = document.querySelector("#player-play-display");
const computerDisplayContent = document.querySelector("#computer-play-display");

const playerScoreDisplay = document.querySelector("#score-player");
const computerScoreDisplay = document.querySelector("#score-computer");

let playerScore = 0;
let computerScore = 0;

playsBtns.forEach((playBtn, _, buttons) =>
  playBtn.addEventListener("click", () => {
    buttons.forEach((button) => toggleBtnDisabled(button));

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

      buttons.forEach((button) => toggleBtnDisabled(button));

      showFinalResult(playerScore, computerScore, 3);
    }, ANIMATION_DURATION);
  }),
);

function playRound(computerChoice, humanChoice) {
  let winner = null;

  switch (computerChoice) {
    case "pedra":
      if (humanChoice === "papel") {
        winner = "player";
        playerScore++;
      } else if (humanChoice === "tesoura") {
        winner = "computer";
        computerScore++;
      }
      break;

    case "papel":
      if (humanChoice === "tesoura") {
        winner = "player";
        playerScore++;
      } else if (humanChoice === "pedra") {
        winner = "computer";
        computerScore++;
      }
      break;

    case "tesoura":
      if (humanChoice === "pedra") {
        winner = "player";
        playerScore++;
      } else if (humanChoice === "papel") {
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
    return "pedra";
  } else if (randNum >= 4 && randNum <= 6) {
    return "papel";
  } else if (randNum >= 7 && randNum <= 9) {
    return "tesoura";
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
