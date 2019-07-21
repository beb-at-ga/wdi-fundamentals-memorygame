
let cards = ["donna","donna","re","re"];
let cardsInPlay = [];
let cardOne = cards[0];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

console.log("Current cards in play " + cardsInPlay);


// Inside of the if statement you created in the last step, create an if...else statement that checks for equality between the two cards in the cardsInPlay array.
// For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card in the cardsInPlay array.
// HINT: You'll want to use the === operator here.

// If values are equal, execute an alert with the message "You found a match!"
// alert("You found a match!");
// If values are not equal, execute an alert with the message "Sorry, try again."

// After saving your main.js file, open the index.html file in Sublime Text, right click, and open the project in Chrome. The alert "Sorry, try again." should pop up.

// Test out storing different cards in the cardOne and cardTwo variables to make sure that everything is up and running!


if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

