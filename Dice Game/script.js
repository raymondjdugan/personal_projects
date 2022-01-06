'use strict';
//Getting elements from the html and storing in variables
//Player elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Score elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Dice and button elements
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Declaration of starting variables
let scores, currentScore, activePlayer, playing;

// Initial conditions function
const init = function () {
  //Array to hold score at the end of each round
  scores = [0, 0];

  //Variable to hold the current score
  currentScore = 0;

  //Variable to hold the active player
  activePlayer = 0;

  //Set state of game
  playing = true;

  // Starting conditions for the elements
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Starting CSS for elements
  diceEl.classList.add('hidden');
  player0El.classList.remove('plyaer--winner');
  player0El.classList.remove('player--winner');
  player0El.classList.remove('player-active');
};
init();

//Function to switch players
const swtichPlayer = function () {
  //Setting current score to zero based on the active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //Choosing active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Toggle the class css based on the active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice funtionallity
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score; Set text of current player to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch players
      swtichPlayer();
    }
  }
});

// Hold button functionallity
btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to the active player's scores array index
    scores[`${activePlayer}`] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check players score >=100; If true, finish game
    if (scores[activePlayer] >= 20) {
      //Finish game by adding css class player--winner to the class of the active player
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to next player
      swtichPlayer();
    }
  }
});
// Resetting the game
btnNew.addEventListener('click', function () {
  init();
});
