export function createCards(total) {
  const board = document.querySelector(".cardContainer");
  for (let i = 1; i <= total; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.id = "card" + i;

    let front = document.createElement("div");
    front.classList.add("front");

    let back = document.createElement("div");
    back.classList.add("back");

    card.appendChild(front);
    card.appendChild(back);
    board.appendChild(card);
  }
}
