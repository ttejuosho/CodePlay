//console.log("This is Project Euler.");

const path = require("path");

//Find the sum of all the multiples of 3 or 5 below 1000.
findMultiples = (belowNumber) => {
  let sum = 0;
  for (var i = 0; i < belowNumber; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};

//console.log(findMultiples(200));

evenValueFibonacci = (seriesCount) => {
  if (seriesCount < 1) {
    return 0;
  }
  let fibonacciSeries = [];
  let fibonacciEvenSeries = [];
  let fibonacciEvenSum = 0;
  if (seriesCount >= 1) {
    fibonacciSeries.push(1);
  }

  if (seriesCount >= 2) {
    fibonacciSeries.push(2);
    fibonacciEvenSeries.push(2);
    fibonacciEvenSum += 2;
  }

  if (seriesCount > 2) {
    for (let i = 0; i < seriesCount - 2; i++) {
      let nextTerm = fibonacciSeries[i] + fibonacciSeries[i + 1];
      fibonacciSeries.push(nextTerm);
      if (nextTerm % 2 == 0) {
        fibonacciEvenSeries.push(nextTerm);
        fibonacciEvenSum += nextTerm;
      }
    }
  }
  console.log(fibonacciEvenSeries);
  console.log(fibonacciSeries);
  return fibonacciEvenSum;
};

//console.log(evenValueFibonacci(10));

threeDigitPalindromic = () => {
  let numbArr = 0;
  for (let i = 1000; i > 99; i--) {
    for (let j = 1000; j > 99; j--) {
      let value = i * j;
      let valueString = value.toString();
      let reversedValueString = valueString.split("").reverse().join("");
      if (valueString === reversedValueString) {
        if (value > numbArr) {
          numbArr = value;
        }
      }
    }
  }
  return numbArr;
};

//console.log(threeDigitPalindromic());

//Problem 5
oneTwentyDivisible = () => {
  let i = 1;
  while (i > 0) {
    for (j = 1; j < 21; j++) {
      if (i % j > 0) {
        break;
      }
      if (j == 20) {
        return i;
      }
    }
    i++;
  }
};

//console.log(oneTwentyDivisible()); //returns 232792560

//Problem 6
//Sum Square Difference
sumSquareDifference = (nthNaturalNumber) => {
  let i = 1;
  let sum = 0;
  let sumSquare = 0;
  while (i <= nthNaturalNumber) {
    sum += i;
    sumSquare += i * i;
    i++;
  }
  return sum * sum - sumSquare;
};

//console.log(sumSquareDifference(1000));

//Problem 7
//10001st Prime Number
isPrimeNumber = (number) => {
  let prime = true;
  if (number > 0) {
    let cutOff = Math.round(number / 2);
    for (let i = 2; i <= cutOff; i++) {
      if (number % i == 0) {
        prime = false;
        break;
      }
    }
  } else {
    return "Enter a number more than 0";
  }

  return prime;
};

nthPrimeNumber = (count) => {
  let i = 2;
  let primeNumberCount = 0;
  while (i > 0) {
    var isPrime = isPrimeNumber(i);
    if (isPrime == true) {
      primeNumberCount++;
      if (primeNumberCount == count) {
        return i;
      }
    }
    i++;
  }
};

//console.log(nthPrimeNumber(10001)); //104743

//Problem 9
//Special Pythagorean Triplet
//Using Formaula for a = (500000 - 1000 * b) / (1000 - b)
specialPythagoreanTriplet = () => {
  let a;
  let c;
  for (let b = 1; b < 1001; b++) {
    a = (500000 - 1000 * b) / (1000 - b);
    if (a === Math.floor(a)) {
      c = 1000 - a - b;
      return [a, b, c, a * b * c];
    }
  }
};

//console.log(specialPythagoreanTriplet());

//Problem 10
//Summation of Primes under 2m
primeSummation = () => {
  let p = 0;
  let primeSummation = 0;
  while (p < 2000001) {
    if (isPrimeNumber(p) == true) {
      primeSummation += p;
    }
    p++;
  }
  return primeSummation;
};

//console.log(primeSummation()); //Returns 142913828923

//Problem 11
//Largest Product in a Grid
let grid = [
  08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91,
  08, 49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56,
  62, 00, 81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49,
  13, 36, 65, 52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71,
  37, 02, 36, 91, 22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40,
  28, 66, 33, 13, 80, 24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36,
  84, 20, 35, 17, 12, 50, 32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59,
  54, 70, 66, 18, 38, 64, 70, 67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39,
  63, 08, 40, 91, 66, 49, 94, 21, 24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78,
  78, 96, 83, 14, 88, 34, 89, 63, 72, 21, 36, 23, 09, 75, 00, 76, 44, 20, 45,
  35, 14, 00, 61, 33, 97, 34, 31, 33, 95, 78, 17, 53, 28, 22, 75, 31, 67, 15,
  94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92, 16, 39, 05, 42, 96, 35, 31, 47,
  55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57, 86, 56, 00, 48, 35, 71, 89,
  07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58, 19, 80, 81, 68, 05, 94,
  47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40, 04, 52, 08, 83, 97,
  35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66, 88, 36, 68, 87,
  57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69, 04, 42, 16,
  73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 80, 62, 76, 36, 20, 69,
  36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 94, 36, 16, 20,
  73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 95, 54,
  01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67,
  98,
];

getNextFourIndexes = (n) => {
  let nextFour = [n];
  let i = 0;

  while (i < 3) {
    n += 21;
    nextFour.push(n);
    i++;
  }

  return nextFour;
};

largestProductGrid = () => {
  let largestProduct = 0;
  let theFourIndexes;
  for (let s = 1; s < 338; s++) {
    let nextFourIndexes = getNextFourIndexes(s);
    let multiple = 1;
    for (let p = 0; p < nextFourIndexes.length; p++) {
      multiple = multiple * grid[nextFourIndexes[p]];
    }
    if (multiple > largestProduct) {
      largestProduct = multiple;
      theFourIndexes = nextFourIndexes;
    }
  }
  console.log([
    grid[theFourIndexes[0]],
    grid[theFourIndexes[1]],
    grid[theFourIndexes[2]],
    grid[theFourIndexes[3]],
  ]);
  return largestProduct;
};

//console.log(largestProductGrid());

//Problem 12
//Triangular Number
fiveHundredDivisors = () => {
  let i = 1;
  let sum = 0;
  while (i > 0) {
    sum += i;
    let divisorCount = 0;
    let upperLimit = Math.floor(sum / 2) + 2;
    for (let j = 1; j < upperLimit; j++) {
      if (sum % j == 0) {
        divisorCount++;
      }
    }
    if (divisorCount > 500) {
      return [divisorCount, sum];
    }
    i++;
  }
};

//console.log(fiveHundredDivisors());

//Problem 14
//Collatz Sequence
getCollatzSequenceLength = (p) => {
  let cSeries = [p];
  let n = p;

  while (n > 1) {
    if (n % 2 == 0) {
      n = n / 2;
      cSeries.push(n);
    } else {
      n = 3 * n + 1;
      cSeries.push(n);
    }

    if (n == 1) {
      return cSeries.length;
    }
  }
};

longestCollatzSeries = () => {
  let seriesStartingNumber = 0;
  let startingNumber = 0;
  let seriesLength = 0;
  while (seriesStartingNumber < 1000000) {
    let iterationSeriesLength = getCollatzSequenceLength(seriesStartingNumber);
    if (iterationSeriesLength > seriesLength) {
      startingNumber = seriesStartingNumber;
      seriesLength = iterationSeriesLength;
    }
    seriesStartingNumber++;
  }
  return {
    "Starting Number": startingNumber,
    "Series Length": seriesLength,
  };
};

//console.log(longestCollatzSeries());

//Problem 16
//Power Digit Sum
powerDigitSum = () => {
  let bigNumber = BigInt(Math.pow(2, 1000));
  let bigNumberArray = bigNumber.toString().split("");
  let sum = 0;
  for (let i = 0; i < bigNumberArray.length; i++) {
    sum += parseInt(bigNumberArray[i]);
  }
  return sum;
};

//console.log(powerDigitSum()); 1366

//Problem 17
//Number Letter Count
var ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
var teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function convert_billions(num) {
  if (num >= 1000000000) {
    return (
      convert_billions(Math.floor(num / 1000000000)) +
      " billion " +
      (num % 1000000000 === 0 ? "" : "and ") +
      convert_millions(num % 1000000000)
    );
  } else {
    return convert_millions(num);
  }
}

function convert_millions(num) {
  if (num >= 1000000) {
    return (
      convert_millions(Math.floor(num / 1000000)) +
      " million " +
      (num % 1000000 === 0 ? "" : "and ") +
      convert_thousands(num % 1000000)
    );
  } else {
    return convert_thousands(num);
  }
}

function convert_thousands(num) {
  if (num >= 1000) {
    return (
      convert_hundreds(Math.floor(num / 1000)) +
      " thousand " +
      (num % 1000 === 0 ? "" : "and ") +
      convert_hundreds(num % 1000)
    );
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num > 99) {
    return (
      ones[Math.floor(num / 100)] +
      " hundred " +
      (num % 100 === 0 ? "" : "and ") +
      convert_tens(num % 100)
    );
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function convert(num) {
  if (num == 0) return "zero";
  else return convert_billions(num);
}

//end of conversion code

function main() {
  var cases = [
    0, 1, 2, 7, 10, 11, 12, 13, 15, 19, 20, 21, 25, 29, 30, 35, 50, 55, 69, 70,
    99, 100, 101, 119, 510, 900, 1000, 5001, 5019, 5555, 10000, 11000, 100000,
    199001, 1000000, 1111111, 190000009, 1454739521,
  ];
  for (var i = 0; i < cases.length; i++) {
    console.log(cases[i] + ": " + convert(cases[i]));
  }
}

//main();
numberLetterCounts = () => {
  let i = 1;
  let letterCount = 0;
  while (i <= 1000) {
    let words = convert_billions(i);
    letterCount += words.length;
    i++;
  }
  console.log(letterCount);
};

//numberLetterCounts(); 24617

//Problem 18
//Maximum Path Sum I

maximumPathSum = () => {
  let maximumSumPathArray = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 04, 82, 47, 65],
    [19, 01, 23, 75, 03, 34],
    [88, 02, 77, 73, 07, 63, 67],
    [99, 65, 04, 28, 06, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
  ];
  let pathNumbers = [];
  let sum = 0;
  let i = 0;
  let lineCount = maximumSumPathArray.length;

  while (i < lineCount) {
    let largestNumber = maximumSumPathArray[i].sort().pop();
    sum += largestNumber;
    pathNumbers.push(largestNumber);
    i++;
  }
  console.log(sum);
  console.log(pathNumbers);
};

//maximumPathSum(); 1313

//Problem 20
//Factorial Digit Sum
factorialDigitSum = (n) => {
  let i = n;
  let product = 1;
  while (i >= 1) {
    product = product * i;
    i--;
  }
  console.log(BigInt(product));
  let productSum = 0;
  let productArray = BigInt(product).toString().split("");
  let j = 0;
  while (j < productArray.length) {
    productSum += parseInt(productArray[j]);
    j++;
  }
  console.log(productSum);
};

factorialDigitSum(100);
