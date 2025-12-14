import { gameControl } from "./gameControl.js";
let countdown;
let time = 119;
const cardContainer = document.getElementById("cardContainer");

export function stopTimer() {
  clearInterval(countdown);
}

export function gameTimer() {
  const timeElement = document.getElementById("timeLeft");
  countdown = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    timeElement.textContent = `${min}:${sec}`;
    time--;

    if (time < 20) {
      timeElement.style.color = "red";
    }
    if (time < 0) {
      clearInterval(countdown);
      timeElement.textContent = "00:00";
      gameControl("0");
    }
  }, 1000);
}

const controlButton = document.getElementById("controlButton");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("resume");

//pause timer
pauseButton.addEventListener("click", function () {
  clearInterval(countdown);
  cardContainer.style.animation = "hiddenAnimation 1 0.2s ease";
  cardContainer.style.opacity = 0;
});

//resume timer
playButton.addEventListener("click", function () {
  gameTimer();
  cardContainer.style.animation = "showAnimation 1 0.2s ease";
  cardContainer.style.opacity = 1;
});

//hide and show control buttons
controlButton.addEventListener("click", function () {
  if (pauseButton.style.display === "none") {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  } else {
    pauseButton.style.display = "none";
    playButton.style.display = "block";
  }
});
