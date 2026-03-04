export const playsBtns = document.querySelectorAll(
  "#plays-choices-container > *",
);
const choicesContainer = document.querySelector("#plays-choices-container");
const choicesButtons = document.querySelectorAll(
  "#plays-choices-container > *",
);

export function setPlayDisplay(play, display) {
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
}

export function setLastPlaysDisplay(play, display, playsCounter) {
  if (playsCounter === 1) {
    display.textContent = "";
  }

  if (playsCounter > 1 && playsCounter % 5 === 1) {
    display.innerHTML += "<br>";
  }

  switch (play) {
    case "rock":
      display.innerHTML += '<i class="fa-solid fa-hand-back-fist"></i>';
      break;

    case "paper":
      display.innerHTML += '<i class="fa-solid fa-hand"></i>';
      break;

    case "scissors":
      display.innerHTML += '<i class="fa-solid fa-hand-scissors"></i>';
      break;

    default:
      display.textContent += "ERROR";
      break;
  }
}

export function updateScoreDisplay(display, score) {
  display.textContent = score;
}

export function showFinalResult(playerScore, computerScore) {
  if (isGameEnd(playerScore, computerScore)) {
    const resultPar = finalResultUi(playerScore, computerScore);
    hideChoicesBtns(playerScore, computerScore);
    choicesContainer.appendChild(resultPar);
  }
}

function isGameEnd(playerScore, computerScore) {
  return playerScore === 5 || computerScore === 5 ? true : false;
}

function hideChoicesBtns() {
  choicesButtons.forEach((el) => el.classList.toggle("vb-hidden"));
}

function finalResultUi(playerScore, computerScore) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const retryBtn = document.createElement("button");

  div.id = "result-div";
  div.classList = "dflex fdir-col gp-1 text-center";
  p.style.fontSize = "1.5rem";
  retryBtn.textContent = "Try Again";
  retryBtn.addEventListener("click", () => location.reload());

  if (playerScore === 5) {
    p.textContent = "You Win!";
  } else if (computerScore === 5) {
    p.textContent = "You Lose :(";
  }

  div.appendChild(p);
  div.appendChild(retryBtn);

  return div;
}
