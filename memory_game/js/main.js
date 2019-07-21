
let cards = ["donna", "donna", "re", "re"];
let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
    }
}

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId]);

    cardsInPlay.push(cards[cardId]);
    console.log("Current cards in play: " + cardsInPlay);

    checkForMatch();
}

flipCard(1);
flipCard(0);


