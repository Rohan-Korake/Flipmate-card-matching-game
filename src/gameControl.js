export function gameControl(statusCode) {
  const gameStateControl = document.getElementById("gameStateControl");
  const gameControlButton = document.getElementById("gameControlButton");
  const timeOutMessage = document.getElementById("timeOutMessage");
  const hourGlassImg = document.getElementById("hourGlassImg");
  const trophy = document.getElementById("trophy");

  gameControlButton.addEventListener("click", function () {
    location.reload();
  });

  if (statusCode == 0) {
    hourGlassImg.style.display = "flex";
    trophy.style.display = "none";
    document.getElementById("hourGlassImg").classList.add("rotate");

    timeOutMessage.textContent = "Time’s Up! Try Again!";
    timeOutMessage.classList.add("messageAnimation");
    gameControlButton.textContent = "Replay";
    gameControlButton.classList.add("replayButtonAnimtion");
    gameStateControl.style.display = "flex";
  }

  if (statusCode == 1) {
    hourGlassImg.style.display = "none";
    trophy.style.display = "flex";
    trophy.classList.add("bounceTrophy");
    timeOutMessage.textContent = "Victory! Well Played!";
    timeOutMessage.classList.add("messageAnimation");
    gameControlButton.textContent = "Play Again!";
    gameControlButton.classList.add("replayButtonAnimtion");
    gameStateControl.style.display = "flex";
  }
}
