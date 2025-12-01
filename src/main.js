import { createCards } from "./card.js";

import { shuffleCards } from "./shuffle.js";

import { startGame } from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
  setupCards();
  startGame();
});

function setupCards() {
  createCards(28);
  shuffleCards(28);
}
