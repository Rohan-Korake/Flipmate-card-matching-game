export function shuffleCards() {
  let imageSource = [
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Tea.png?updatedAt=1756555321652",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Cake.png?updatedAt=1756555297455",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Watermelon.png?updatedAt=1756555269242",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Lion.png?updatedAt=1756555244959",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Robot.png?updatedAt=1756555219779",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/minion.png?updatedAt=1756555191290",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Apple.png?updatedAt=1756555160398",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Rocket.png?updatedAt=1756555132258",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Rose.png?updatedAt=1756555062810",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Cat.png?updatedAt=1756555005678",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Dog.png?updatedAt=1756554958311",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Fish.png?updatedAt=1756554909989",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Penguin.png?updatedAt=1756554929934",
    "https://ik.imagekit.io/ik0myx9mu/FlipMate/Bird.png?updatedAt=1756554764596",
  ];

  // duplicate the array
  let imagesForCards = [...imageSource, ...imageSource];

  // shuffle the array
  for (let i = imagesForCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagesForCards[i], imagesForCards[j]] = [
      imagesForCards[j],
      imagesForCards[i],
    ];
  }

  // assign images to cards
  for (let i = 1; i <= 28; i++) {
    let card = document.getElementById(`card${i}`);
    if (card) {
      let cardBack = card.querySelector(".back");
      cardBack.style.backgroundImage = `url(${imagesForCards[i - 1]})`;
      cardBack.style.backgroundSize = "cover";
      cardBack.style.backgroundPosition = "center";
      card.dataset.image = imagesForCards[i - 1];
    }
  }
}
