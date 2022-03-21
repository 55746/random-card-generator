// function randomnum() {
//   let number = document.querySelector("#number");
//   var randomNumber = Math.floor(Math.random() * 10).number;
//   return element.write(randomNumber());
// }

// let element = getquerySelector("#card")
function ranNumber() {
  // random number generator
  let number = Math.floor(Math.random() * 10);
  //how to add it to the div. no hashtag
  document.getElementById("#number").innerText = number;
  return;
}

//when using onload method to this
ranNumber();
