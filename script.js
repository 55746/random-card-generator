let cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "J", "K", "Q"];
let suitblack = ["♠", "♣"];
let suitred = ["♦", "♥"];
let fullsuit = ["♠", "♣", "♦", "♥"];

let suitorigin = suitblack[Math.floor(Math.random() * suitblack.length)];
let suitorigin2 = suitred[Math.floor(Math.random() * suitred.length)];

for (i = 0; i <= fullsuit.length; i++) {
  if (fullsuit.indexOf == suitred[("♦", "♥")]) {
    document.querySelector("#top-suitred").innerText = suitorigin2;
  } else fullsuit.indexOf == suitblack[("♠", "♣")];
  document.querySelector("#bottom-suitblack").innerText = suitorigin;
}

// ARRAYS
// let cardsorigin = cards[Math.floor(Math.random() * cards.length)];

// MAIN MATH SYNTAX

// document.querySelector("#top-suitred").innerText = suitorigin2;
// document.querySelector("#top-suitblack").innerText = suitorigin;
// document.querySelector("#bottom-suitblack").innerText = suitorigin;
// document.querySelector("#number").innerText = cardsorigin;

// // COMBINING MATH SYNTAX WITH CORRECT ID

// function generate() {
// if (suit.indexOf == suit[("♦", "♥")]) {
//     document.querySelector("#top-suitred").innerText = suitorigin2;
// }else if(suit.indexOf == suit[("♠", "♣")]){
//     document.querySelector("#bottom-suit").innerText = suitorigin;
// }

//   document.querySelector("#top-suit").innerText = suitorigin;
//   document.querySelector("#bottom-suit").innerText = suitorigin;
//   document.querySelector("#number").innerText = cardsorigin;
// }
