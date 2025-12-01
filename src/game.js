import { gameControl } from "./gameControl.js";
import { gameTimer, stopTimer } from "./statusbar.js";
document.addEventListener("DOMContentLoaded", () => {
  gameTimer();
});

export function startGame() {
  var card1 = null,
    card2 = null;
  let wrongMatch = 0;
  let correctMatch = 0;
  const board = document.querySelector(".cardContainer");
  const wrongPairCounter = document.getElementById("wrongPair");
  const correctpairCounter = document.getElementById("correctPair");
  let isPairMatch = false;
  board.addEventListener("click", function (event) {
    const card = event.target.closest(".card");

    if (!card || card.listenerActive === false || card.isMatched) return;
    card.classList.toggle("flipped");

    if (!card1) {
      card1 = card;
      card1.listenerActive = false;
    } else {
      card2 = card;
      card2.listenerActive = false;
      isMatch(card1, card2);
      card1 = null;
      card2 = null;
    }
  });

  function isMatch(card1, card2) {
    if (card1.dataset.image === card2.dataset.image) {
      setTimeout(() => {
        correctMatch++;
        if (correctMatch == 14) {
          stopTimer();
          gameControl("1");
        }
        correctMatch = correctMatch < 10 ? "0" + correctMatch : correctMatch;
        correctpairCounter.textContent = correctMatch;
        card1.isMatched = true;
        card2.isMatched = true;
      }, 600);
      return;
    } else {
      setTimeout(() => {
        wrongMatch++;
        wrongMatch = wrongMatch < 10 ? "0" + wrongMatch : wrongMatch;
        wrongPairCounter.textContent = wrongMatch;
        card1.classList.toggle("flipped");
        card2.classList.toggle("flipped");
        card1.listenerActive = true;
        card2.listenerActive = true;
      }, 600);
    }
  }
}
