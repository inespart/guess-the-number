'use strict';

// create secret random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// have the value of the score in our code rather than only in the DOM
let score = 20;
// set highscore
let highscore = 0;

// creating a function for the display of the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// display number for coding purposes
// document.querySelector('.number').textContent = secretNumber;

// handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // check if there actually is an input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number! ❌';
    displayMessage('No number! ❌');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number! 🎉🎈🎇');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'You are too high!' : 'You are too low!';
      displayMessage(
        guess > secretNumber ? 'You are too high!' : 'You are too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// implement again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
