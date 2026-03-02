export const playsBtns = document.querySelectorAll(
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

export function updateScoreDisplay(display, score) {
  display.textContent = score;
}
