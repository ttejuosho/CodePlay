const prompt = require("prompt-sync")({ sigint: true });
let exitCode = "exit";
let upperLimit = 99;
let lowerLimit = 10;
let numberCount = 2;
let answer = 0;
let gameStarted;
let difficultyLevelObject = {
  1: "Easy",
  2: "Intermediate",
  3: "Advanced",
};

function shouldIExit(inputCode) {
  if (inputCode == exitCode) {
    console.log("\x1b[31m", "\nExiting game. Bye !!", "\x1b[0m");
    process.exit();
  }
}

function getMenu(inputCode) {}

function getDifficultyValue(difficultyLevel) {
  return difficultyLevelObject[difficultyLevel];
}

let randomNumbersArray = [];
function generateNumbers(lowerLimit, upperLimit, count) {
  while (count > 0) {
    let randomNumber = Math.floor(
      Math.random() * (upperLimit - lowerLimit) + lowerLimit
    );
    if (randomNumbersArray.indexOf(randomNumber) === -1) {
      randomNumbersArray.push(randomNumber);
    }
    count--;
  }
  return randomNumbersArray;
}

function displayEquation(numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    if (i == 1) {
      console.log(`+  ${numbersArray[i].toString().split("").join(" ")}`);
    } else {
      console.log(`   ${numbersArray[i].toString().split("").join(" ")}`);
    }

    if (i == numbersArray.length - 1) {
      console.log(`-----------------`);
      console.log(`-----------------`);
    }
  }
  randomNumbersArray = [];
  answer = 0;
}

function setGameParameters(difficultyLevelValue) {
  if (difficultyLevelValue === "Easy") {
    upperLimit = 99;
    lowerLimit = 10;
  }
  if (difficultyLevelValue === "Intermediate") {
    upperLimit = 999;
    lowerLimit = 100;
  }
  if (difficultyLevelValue === "Advanced") {
    upperLimit = 9999;
    lowerLimit = 1000;
    numberCount = 3;
  }
  let suppliedAnswer;
  gameStarted = true;
}

console.log("\x1b[33m", "\n************************************");
console.log("WELCOME TO THE ADDITION MATH GAME");
console.log("************************************");
console.log("\nPlease Select Difficulty Level");
console.log(
  "Enter 1 for Easy - You get to add 2 digit numbers. For example, 89 + 34"
);
console.log(
  "Enter 2 for Intermediate - You get to add 3 digit numbers. For example, 189 + 214"
);
console.log(
  "Enter 3 for Advanced - You get to add 3 digit numbers. For example, 809 + 314\n"
);
console.log("Enter exit to end the game at anytime\n", "\x1b[0m", "\x1b[0m");

let difficultyLevel;
let difficultyLevelSet = false;

function requestDifficultyLevel() {
  difficultyLevel = prompt("Enter value for difficulty level:  ");
}

function parseString(numberString) {
  return Number(numberString);
}

function isDifficultyLevelValid(difficultyLevel) {
  if (difficultyLevel > 0 && difficultyLevel < 4) {
    difficultyLevelSet = true;
  } else {
    console.log("\nPlease enter 1, 2 or 3\n");
  }
}

function processDifficultyLevelValue() {
  while (difficultyLevelSet === false) {
    requestDifficultyLevel();
    difficultyLevel = parseString(difficultyLevel);
    shouldIExit(difficultyLevel);
    isDifficultyLevelValid(difficultyLevel);
  }
}

function getAnswer() {
  suppliedAnswer = prompt("Answer: ");
}

function calculateAnswer(numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    answer += numbersArray[i];
  }
  console.log(answer);
}

function checkAnswer(suppliedAnswer) {
  shouldIExit(suppliedAnswer);
  if (answer == Number(suppliedAnswer)) {
    console.log("Cool Beans !!");
    console.log("Heres another one.");
  }
}

processDifficultyLevelValue();
let difficultyLevelValue = getDifficultyValue(difficultyLevel);
setGameParameters(difficultyLevelValue);
console.log(`Your Difficulty Level has been set to ${difficultyLevelValue}`);
while (gameStarted == true) {
  let numbersArray = generateNumbers(lowerLimit, upperLimit, numberCount);
  calculateAnswer(numbersArray);
  displayEquation(numbersArray);
  getAnswer();
  checkAnswer(suppliedAnswer);
}
