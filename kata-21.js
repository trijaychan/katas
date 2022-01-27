let prompt = require("prompt-sync")();

let answer = Math.floor(Math.random() * 100);
let input = 0;
let inputs = [];
let counter = 0;

while (input !== answer) {
  input = prompt("Guess a number: ");

  if (input === 'stop') {
    break;
  }

  input = Number(input);

  if (isNaN(input)) {
    console.log('Not a number! Try again!');
  } else if (inputs.includes(input)) {
    console.log('Already Guessed!');
  } else {
    if (input > answer) {
      console.log('Too High!');
    } else if (input < answer) {
      console.log('Too Low!');
    }

    inputs.push(input);
    counter++;
  }
}

console.log('You got it! You took ' + counter + ' attempts!');