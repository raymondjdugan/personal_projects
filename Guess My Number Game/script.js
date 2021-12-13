'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

// Function to display change the text in the message class
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Fuction to change the text in the number class
const displayNumber = function (secNumber) {
  document.querySelector('.number').textContent = secNumber;
};
// Running the functionality on the check button
document.querySelector('.check').addEventListener('click', function () {
  // Setting the guess class to a number
  const guess = Number(document.querySelector('.guess').value);

  // When there is not a valid input
  if (!guess) {
    displayMessage('No number!');

    // When player wins display the message and secret number. Change the background color and width of the number class
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Checking to see if the highscore needs to be set and setting if it does
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is not the secret number change the message and score.
  } else if (guess !== secretNumber) {
    // Check that the score is not 0. If the score is 0, change the message, decrease the score and display the new score
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      // If the score is 0 the player loses
    } else {
      displayMessage('💥 You lost the game!');
    }
  }
});

// Reseting the game keeping the highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
