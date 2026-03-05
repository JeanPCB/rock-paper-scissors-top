export const playsBtns = document.querySelectorAll(
  "#plays-choices-container > *",
);
const choicesContainer = document.querySelector("#plays-choices-container");
const choicesButtons = document.querySelectorAll(
  "#plays-choices-container > *",
);

export function setPlayDisplay(play, display) {
  const timeBase = 1000;
  display.textContent = "JO";

  setTimeout(() => (display.textContent = "KEN"), timeBase);

  setTimeout(() => {
    switch (play) {
      case "rock":
        display.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
        break;

      case "paper":
        display.innerHTML = '<i class="fa-solid fa-hand"></i>';
        break;

      case "scissors":
        display.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
        break;

      default:
        display.textContent = "ERROR";
        break;
    }
  }, timeBase * 2);
}

export function setPlayDisplayColor(display, color) {
  display.style.color = color;
}

export function updateScoreDisplay(display, score) {
  display.textContent = score;
}

export function showFinalResult(playerScore, computerScore, roundLimit) {
  if (isGameEnd(playerScore, computerScore, roundLimit)) {
    const resultPar = finalResultUi(playerScore, computerScore, roundLimit);
    hideChoicesBtns(playerScore, computerScore);
    choicesContainer.appendChild(resultPar);
  }
}

function isGameEnd(playerScore, computerScore, roundLimit) {
  return playerScore === roundLimit || computerScore === roundLimit
    ? true
    : false;
}

function hideChoicesBtns() {
  choicesButtons.forEach((el) => el.classList.toggle("vb-hidden"));
}

function finalResultUi(playerScore, computerScore, roundLimit) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const retryBtn = document.createElement("button");

  div.id = "result-div";
  div.classList = "dflex fdir-col gp-1 text-center";
  p.style.fontSize = "1.5rem";
  retryBtn.textContent = "Try Again";
  retryBtn.addEventListener("click", () => location.reload());

  if (playerScore === roundLimit) {
    p.textContent = "You Win!";
  } else if (computerScore === roundLimit) {
    p.textContent = "You Lose :(";
  }

  div.appendChild(p);
  div.appendChild(retryBtn);

  return div;
}
