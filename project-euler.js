//console.log("This is Project Euler.");
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

onetwentyDivisible = () => {
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

console.log(onetwentyDivisible()); //returns 232792560
