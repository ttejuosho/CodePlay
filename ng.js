const prompt = require("prompt-sync")({ sigint: true });
let exitCode = 99;

function shouldIExit(number) {
  if (number == exitCode) {
    console.log("\x1b[31m", "\nExiting game. Bye !!", "\x1b[0m");
    process.exit();
  }
}

function isPreviouslyGuessed(guess) {
  if (guessedNumbers.includes(guess)) {
    console.log("\x1b[31m", "\nYou've already guessed this number.", "\x1b[0m");
    return false;
  }
}

console.log("\x1b[33m", "\n************************************");
console.log("WELCOME TO THE NUMBER GUESSING GAME");
console.log("************************************");
console.log("\nPlease Select Difficulty Level");
console.log(
  "Enter 1 for Easy - Guess numbers btw 1 and 5 - Maximum of 3 Guesses"
);
console.log(
  "Enter 2 for Intermediate - Guess numbers btw 1 and 10 - Maximum of 5 Guesses"
);
console.log(
  "Enter 3 for Hard - Guess numbers btw 1 and 15 - Maximum of 7 Guesses\n"
);
console.log("Enter 99 to exit the game at anytime\n", "\x1b[0m", "\x1b[0m");

let difficultyLevel = prompt("Enter value for difficulty level:  ");

while (!Number(difficultyLevel) || difficultyLevel < 1 || difficultyLevel > 3) {
  shouldIExit(Number(difficultyLevel));
  console.log("\x1b[31m", "\nPlease enter 1, 2, or 3", "\x1b[0m");
  difficultyLevel = prompt("Enter value for difficulty level:  ");
}

let guessedNumbers = [];
let maxGuesses = 0;

if (difficultyLevel == 1) {
  difficultyLevelText = "Easy";
  upperLimit = 5;
  maxGuesses = 3;
}
if (difficultyLevel == 2) {
  difficultyLevelText = "Intermediate";
  upperLimit = 10;
  maxGuesses = 5;
}
if (difficultyLevel == 3) {
  difficultyLevelText = "Hard";
  upperLimit = 15;
  maxGuesses = 7;
}

// if (difficultyLevel < 1 || difficultyLevel > 3) {
//   console.log(
//     "\x1b[31m",
//     "\nInvalid difficulty level detected, difficulty level will be set to Easy",
//     "\x1b[0m"
//   );
//   difficultyLevelText = "Easy";
//   upperLimit = 5;
//   maxGuesses = 3;
// }

console.log(
  "\x1b[31m",
  `\nDifficulty Level: ${difficultyLevelText}`,
  "\x1b[0m"
);

// Random number from 1 - upperLimit set
const numberToGuess = Math.floor(Math.random() * upperLimit) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
let warningLevel = maxGuesses - 1;
function processInput(guess, numberToGuess, foundCorrectNumber) {
  shouldIExit(guess);
  guessedNumbers.push(guess);
  if (guess == numberToGuess) {
    console.log("\x1b[32m", "\n**********************************************");
    console.log("       CONGRATULATIONS, YOU GOT IT !!!");
    console.log("**********************************************\n", "\x1b[0m");
    foundCorrectNumber = true;
    process.exit();
  }

  if (guessedNumbers.length == warningLevel) {
    console.log(
      "\x1b[33m",
      "\nMessage: You have 1 more guess to go",
      "\x1b[0m"
    );
  }

  if (foundCorrectNumber == false) {
    if (guessedNumbers.length == maxGuesses) {
      console.log("\x1b[31m", "\nSorry, You Lost (+ +)\n", "\x1b[0m");
      console.log(`Your number was ${numberToGuess}`);
      process.exit();
    } else {
      console.log("\nSorry, guess again!\n");
    }
  }
}

while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt(`Guess a number from 1 to ${upperLimit}: `);
  // Convert the string input to a number
  guess = Number(guess);

  if (guess && !isPreviouslyGuessed(guess)) {
    processInput(guess, numberToGuess, foundCorrectNumber);
  } else {
    console.log("\nYou didn't provide a number !!");
  }
}

function getMinimumUniqueSumDone(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let totalSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    }
    totalSum += arr[i];
  }
  return totalSum;
}

function getMinimumUniqueSum(arr) {
  // Write your code here
  const frequency = new Map();
  const usedElements = new Set();
  let totalSum = 0;

  for (let num of arr) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  for (let num of arr) {
    let currentNumber = num;

    while (usedElements.has(currentNumber)) {
      currentNumber++;
    }

    usedElements.add(currentNumber);
    totalSum += currentNumber;
  }

  return totalSum;
}
