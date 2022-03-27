let cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "J", "K", "Q"];
let fullsuit = ["♠", "♣", "♦", "♥"];
let suitorigin = fullsuit[Math.floor(Math.random() * fullsuit.length)];
document.querySelector("#suit").innerHTML = suitorigin;
document.querySelector("#suit2").innerHTML = suitorigin;
if (suitorigin === fullsuit[2] || suitorigin === fullsuit[3]) {
  document.querySelector("#suit").style.color = "red";
  document.querySelector("#suit2").style.color = "red";
}
let cardorigin = cards[Math.floor(Math.random() * cards.length)];
document.querySelector("#number").innerText = cardorigin;
