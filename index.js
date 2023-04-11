"use strict";
//Selecting element
let Score0El = document.querySelector("#score--0");
let Player0El = document.querySelector(".player--0");
let Player1El = document.querySelector(".player--1");
let Score1El = document.querySelector("#score--1");
let Current0El = document.querySelector("#current--0");
let Current1El = document.querySelector("#current--1");
let DiceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let currentScore = 0;
let activeplayer = 0;
let scores = [0, 0];
let playing = true;
// starting condition
Score0El.textContent = 0;
Score1El.textContent = 0;
DiceEl.classList.add("hidden");

//Rolling functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //generating random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice
    DiceEl.classList.remove("hidden");
    DiceEl.src = `dice-${dice}.png`;

    //check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activeplayer}`).textContent =
        currentScore;
    } else {
      //change 0r switch user
      document.querySelector(`#current--${activeplayer}`).textContent = 0;
      activeplayer = activeplayer === 0 ? 1 : 0;
      currentScore = 0;
      Player0El.classList.toggle("player--active");
      Player1El.classList.toggle("player--active");
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //Add current score to active players score
    scores[activeplayer] += currentScore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];
    //check if players score is >=100
    if (scores[activeplayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
      DiceEl.classList.add("hidden");
    }

    // switch users
    // document.querySelector(`#current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentScore = 0;
    Player0El.classList.toggle("player--active");
    Player1El.classList.toggle("player--active");
  }
});
btnNew.addEventListener("click", function () {
  Score0El.textContent = 0;
  Score1El.textContent = 0;
  Current0El.textContent = 0;
  Current1El.textContent = 0;

  Player0El.classList.remove("player--winner");
  Player1El.classList.remove("player--winner");
  Player1El.classList.remove("player--active");
  currentScore = 0;
  activeplayer = 0;
  scores = [0, 0];
  playing = true;
});
