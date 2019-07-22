
let cards = [
    {
        rank: "donna",
        suite: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "donna",
        suite: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "re",
        suite: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "re",
        suite: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
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
    console.log("User flipped " + cards[cardId].rank);

    cardsInPlay.push(cards[cardId].rank);
    console.log("Current cards in play: " + cardsInPlay);

    checkForMatch();
}

flipCard(1);
flipCard(0);



