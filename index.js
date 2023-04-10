"use strict";
//Selecting element
let Score0El = document.querySelector("#score--0");
let Score1El = document.querySelector("#score--1");
let Current0El = document.querySelector("#current--0");
let Current1El = document.querySelector("#current--1");
let DiceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let currentScore = 0;
// starting condition
Score0El.textContent = 0;
Score1El.textContent = 0;
DiceEl.classList.add("hidden");

//Rolling functionality
btnRoll.addEventListener("click", function () {
  //generating random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  DiceEl.classList.remove("hidden");
  DiceEl.src = `dice-${dice}.png`;

  //check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    Current0El.textContent = currentScore;
  } else {
    //change pr switch user
  }
});
