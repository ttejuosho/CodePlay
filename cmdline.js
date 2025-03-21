var arg1 = process.argv[2];
var arg2 = process.argv[3];
arg1 = parseFloat(arg1);

function isInteger(argNum) {
  return Number.isInteger(argNum);
}

function buildString(arg1) {
  var str = "";
  for (var i = 1; i < arg1 + 1; i++) {
    if (i == arg1) {
      str += "Number" + " " + i + ".";
    } else {
      str += "Number" + " " + i + ", ";
    }
  }
  return str;
}

function printFibonacciSeries(arg1) {
  var series = [];
  for (var i = 0; i < arg1; i++) {
    if (i <= 1) {
      series.push(1);
    } else {
      series.push(getNextTerm(series));
    }
  }
  console.log("First " + arg1 + " terms in the Fibonacci Series are : ");
  console.log(series.toString() + ".");
}

function getNextTerm(seriesArray) {
  return (
    seriesArray[seriesArray.length - 1] + seriesArray[seriesArray.length - 2]
  );
}

//printFibonacciSeries(7);

// if (isInteger(arg1)){
//console.log(buildString(arg1));
//     printFibonacciSeries(arg1);
// } else {
//     console.log("Invalid Argument Passed");
// }
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// var xhr = new XMLHttpRequest();
// xhr.timeout = 5000;
// xhr.onreadystatechange = function(e){
// console.log(this);
// if (xhr.readyState === 4){
//     if (xhr.status === 200){
//     //$("#result").html(xhr.response);
//     console.log(xhr.response);
//     } else {
//     console.error("XHR didn't work: ", xhr.status);}
//     }
// }
// xhr.ontimeout = function (){
// console.error("request timedout: ", xhr);
// }
// xhr.open("get", "https://auctiondata.iaai.com/Search?AccessKey=faa3f7d8-932e-42bf-9a61-2b2cf379ad75", /*async*/ true);
// xhr.send();

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function getProfit(arg1) {
  var fixedCost = 250000000;
  var volumePurchased = 30000000 - 90000 * arg1;
  var totalAmountMadeFromFactoryAB = volumePurchased * arg1;

  var factoryAProduced = volumePurchased * 0.6;
  var factoryBProduced = volumePurchased * 0.4;

  var factoryAProductionCost = 190 * factoryAProduced;
  var factoryBProductionCost = 250 * factoryBProduced;

  var totalProductionCost =
    factoryAProductionCost + factoryBProductionCost + fixedCost;
  var profit = totalAmountMadeFromFactoryAB - totalProductionCost;
  var percentProfit =
    ((totalAmountMadeFromFactoryAB - totalProductionCost) /
      totalAmountMadeFromFactoryAB) *
    100;

  if (arg2 === "info") {
    console.log("\n");
    console.log("======================================");
    console.log("Detailed Information @ Price = $" + arg1);
    console.log("====================================== \n");

    console.log(
      "Total Volume Purchased: ",
      formatNumber(volumePurchased),
      "Units"
    );
    console.log(
      "Total Amount made from Factory A & B: $" +
        formatNumber(totalAmountMadeFromFactoryAB),
      " \n"
    );

    console.log(
      "Total Number of Units Produced at Factory A: ",
      formatNumber(factoryAProduced),
      "Units"
    );
    console.log(
      "Total Number of Units Produced at Factory B: ",
      formatNumber(factoryBProduced),
      "Units \n"
    );

    console.log(
      "Factory A Production Cost: $" + formatNumber(factoryAProductionCost)
    );
    console.log(
      "Factory B Production Cost: $" + formatNumber(factoryBProductionCost)
    );
    console.log("Total Production Cost: $" + formatNumber(totalProductionCost));
  }
  console.log("\n");
  console.log("Profit: $" + formatNumber(profit));

  console.log("Percentage Profit: ", percentProfit.toFixed(2), "% \n");
}

//getProfit(arg1);

const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { name: callSign } = user;
//console.log(callSign);

function gogoLake(inputString) {
  return inputString.length;
}

//const ggy = gogoLake("inputString");
//console.log( ggy );

const numArray = [2, 3, 1, 2, 4, 1, 7, 8];
function maxDifference(numArray) {
  let maxDiff = numArray[1] - numArray[0];
  let firstElement = numArray[0];

  numArray.forEach((i) => {
    if (i - firstElement > maxDiff) {
      maxDiff = i - firstElement;
    }

    if (i < firstElement) {
      firstElement = i;
    }
  });

  if (maxDiff === 0) {
    return -1;
  }

  return maxDiff;
}

//var maxDiff = maxDifference(numArray);
//console.log(maxDiff);

var permy = function (wordString, prefix) {
  if (wordString.length == 0) {
    return prefix;
  }

  for (var i = 0; i < wordString.length; i++) {
    var rem = wordString.substring(0, i) + wordString.substring(i, 1);
  }
};

//var recurr = "ABCDAIJHLMNOA";
function recurringChar(str) {
  var strArr = str.toLowerCase().split("");
  var strObj = {};

  strArr.forEach((char) => {
    if (!strObj[char]) {
      strObj[char] = 1;
    } else {
      strObj[char] += 1;
      console.log(char);
    }
  });
  // for(var i = 0; i < strArr.length; i++){
  //     if (!strObj[strArr[i]]){
  //         strObj[strArr[i]] = 1;
  //     } else {
  //         var temp = strArr[i];
  //         console.log(temp);
  //         strObj[temp] += 1;
  //     }
  // }
  console.log(strObj);
}

//recurringChar(recurr);

//var revStr = "esrever";

reverseString = (revStr) => {
  //let strArray = revStr.split("");
  let newString = "";
  // strArray.forEach((char) => {
  //     newArr.unshift(char);
  // });

  //Method 2 (Decrementing For Loop)
  // for( var i = strArray.length; i--; ){
  //     newString += strArray[i];
  // }

  //Method 3 (CharAt)
  for (var i = revStr.length; i--; ) {
    revStr1 += revStr.charAt(i);
  }

  console.log(newString);
};

reverseStringArray = (revStr) => {
  let newArr = [];
  revStr.forEach((char) => {
    newArr.unshift(char);
  });

  console.log(newArr);
};

//reverseString(revStr);

function reverseStringRecursion(str) {
  if (str === "")
    // This is the terminal case that will end the recursion
    return "";
  else return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}

//var ddc = reverseStringRecursion("hello");

//var a = [23, 44, 55, 43, 82, 78, 12, 34, 50, 20, 21, 54, 66, 81, 40, 64, 91, 74, 12, 67];
//var b = [21, 54, 66, 81, 40, 64, 91, 74, 12, 67, 23, 44, 55, 43, 82, 78, 12, 34, 50, 20];

function compareTriplets(a, b) {
  var result = [0, 0];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0] += 1;
    }

    if (a[i] < b[i]) {
      result[1] += 1;
    }
  }

  return result;
}

//var dde = compareTriplets(a, b);

//var ar = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  var sum = 0;
  var i = 0;
  while (ar[i]) {
    sum += ar[i];
    i++;
  }
  return sum;
}

// 1 2 3 4  [ 1(0) 6(1) 11(2) 16(3) ]
// 5 6 7 8  [ 4(3) 7(2) 10(1) 13(0) ]
// 9 0 1 2
// 3 4 5 6

// var sdc = aVeryBigSum(ar);
// console.log(sdc);
// var arr =
//         [
//             [1, 2, 3],
//             [4, 5, 6],
//             [9, 8, -9]
//         ];
function diagonalDifference(arr) {
  // Write your code here
  // 3D Array, each of length 3
  // to Get diagonal indexes 1, 5, 9 => ( i + length + 1 )
  var diagonalSum1 = 0;
  var diagonalSum2 = 0;
  var result;
  for (var i = 0; i < arr.length; i++) {
    diagonalSum1 += arr[i][i];
    diagonalSum2 += arr[arr.length - (i + 1)][i];
  }
  console.log(diagonalSum1, diagonalSum2);
  if (diagonalSum1 < diagonalSum2) {
    result = diagonalSum2 - diagonalSum1;
  } else {
    result = diagonalSum1 - diagonalSum2;
  }
  console.log(result);
}

// diagonalDifference(arr);

//var arr = [-4, 3, -9, 0, 4, 1];

// Complete the plusMinus function below.
function plusMinus(arr) {
  var arrLength = arr.length;
  var zeroCount = 0;
  var gtzCount = 0;
  var ltzCount = 0;
  for (var i = 0; i < arrLength; i++) {
    if (arr[i] == 0) {
      zeroCount += 1;
    }

    if (arr[i] > 0) {
      gtzCount += 1;
    }

    if (arr[i] < 0) {
      ltzCount += 1;
    }
  }

  console.log((gtzCount / arrLength).toFixed(6));
  console.log((ltzCount / arrLength).toFixed(6));
  console.log((zeroCount / arrLength).toFixed(6));
}

//plusMinus(arr);

// Complete the staircase function below.
function staircase(n) {
  var i = 0;
  var outputString = "";

  while (i < n) {
    var j = 0;
    var ashtag = "";

    var k = n - (i + 1);
    while (k > 0) {
      ashtag += " ";
      k--;
    }

    while (j <= i) {
      ashtag += "#";
      //console.log(ashtag);
      j++;
    }

    ashtag += "\n";
    outputString += ashtag;
    i++;
  }
  console.log(outputString);
}

//staircase(4);

//var arr = [6, 3, 4, 5, 2];

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });

  var i = 0;
  var j = arr.length - 4;
  var minSum = 0;
  var maxSum = 0;
  while (i < 4) {
    minSum += arr[i];
    i++;
  }

  while (j < arr.length) {
    maxSum += arr[j];
    j++;
  }

  console.log(minSum, "--", maxSum);
}

//miniMaxSum(arr);

//var candles = [6, 3, 4, 5, 8, 8, 7, 6];
function birthdayCakeCandles(candles) {
  // Write your code here
  var maxNumber = Math.max(...candles);
  var counter = 0;
  candles.forEach((i) => {
    if (i == maxNumber) {
      counter++;
    }
  });
  console.log(counter);
}

//birthdayCakeCandles(candles);

//var s = "12:05:45AM"
function timeConversion(s) {
  /*
   * Write your code here.
   */
  var hour = parseFloat(s[0] + s[1]);
  var sArr = s.split("");
  var inputLength = sArr.length;
  var apm = s[inputLength - 2];
  if (hour < 12 && apm === "P") {
    hour += 12;

    sArr[0] = hour.toString()[0];
    sArr[1] = hour.toString()[1];
  }

  if (hour == 12 && apm === "A") {
    sArr[0] = "0";
    sArr[1] = "0";
  }

  sArr.pop();
  sArr.pop();
  console.log(sArr.join(""));
}

//timeConversion(s);

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var applePos = 0;
  var orangePos = 0;

  apples.forEach((i) => {
    if (i + a >= s && i + a <= t) {
      applePos += 1;
    }
  });

  oranges.forEach((j) => {
    if (j + b >= s && j + b <= t) {
      orangePos += 1;
    }
  });

  console.log(applePos, orangePos);
}

//var s = 7; t = 11; a = 5; b = 15; apples = [-2, 2, 1]; oranges = [5, -6];
//countApplesAndOranges(s, t, a, b, apples, oranges);
//Check for anagrams
var stringA = "rail 45";
var stringB = "45 rail";

checkforAnagrams = (stringA, stringB) => {
  //Input Validation
  if (stringA === undefined || stringA.length < 1) {
    return "Please Check StringA";
  }

  if (stringB === undefined || stringB.length < 1) {
    return "Please Check StringB";
  }

  let charMapA = {};
  let charMapB = {};

  for (let char of stringA) {
    charMapA[char] = charMapA[char] + 1 || 1;
  }

  for (let char of stringB) {
    charMapB[char] = charMapB[char] + 1 || 1;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
};

//var dd = checkforAnagrams(stringA, stringB);
//console.log(dd);

//Check if string contains numbers only
var stringy = "33232a3";
checkForDigits = (stringy) => {
  for (let char of stringy) {
    if (!parseInt(char)) {
      console.log(char);
      return false;
    }
  }
  return true;
};

//var dd = checkForDigits(stringy);
//console.log(dd);

let string = "abc";
let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  }

  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
};

//var dd = findPermutations("abc");
//console.log(dd);

function bruteForceTwoSum(array, sum) {
  let nums = [];
  let prevNums = [];

  for (let x in array) {
    for (let y in array) {
      if (array[x] + array[y] === sum) {
        if (!!nums.length) {
          if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
            prevNums.push(array[x]);
            nums.push([array[x], array[y]]);
          }
        } else {
          nums.push([array[x], array[y]]);
          prevNums.push(array[x]);
        }
      }
    }
  }
  return nums;
}

function getLetter(s) {
  let letter;
  var setA = "aeiou";
  var setB = "bcdfg";
  var setC = "hjklm";
  var setD = "npqrstvwxyz";
  // Write your code here
  switch (true) {
    case setA.includes(s[0]):
      letter = "A";
      break;
    case setB.includes(s[0]):
      letter = "B";
      break;
    case setC.includes(s[0]):
      letter = "C";
      break;
    case setD.includes(s[0]):
      letter = "D";
      break;
    default:
      letter = "Z";
  }

  return letter;
}

var nums = [5, 6, 9, 7, 8, 7, 9, 9, 10, 10, 10];
function getSecondLargest(nums) {
  // Complete the function
  var numss = nums.sort(function (a, b) {
    return a - b;
  });
  var length = numss.length;
  while (length > 0) {
    if (numss[length - 1] > numss[length - 2]) {
      return numss[length - 2];
    }
    length--;
  }
}

//var ssd = getSecondLargest(nums);
//console.log(ssd);

//JS CONSTRUCTORS
function Person(name, age, gender, interests) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.whatsGood = function () {
    return this.name + " is alright dude";
  };
}

let taiwo = new Person("Taiwo", 33, "male", ["computers", "music"]);
taiwo.kilowa = function () {
  console.log("JS CONSTRUCTORS");
};

//taiwo.kilowa();

class Tejuosho {
  constructor(name, year, branch, location, interests) {
    this.name = name;
    this.year = year;
    this.branch = branch;
    this.location = location;
    this.interests = interests;
  }
  getBio() {
    console.log(`Im ${this.name} and my dad's name is ${this.branch}`);
  }
  getLocation() {
    console.log(`Find me in ${this.location}`);
  }
}

Tejuosho.prototype.goHome = function () {
  console.log("Bus, Train or Flight");
};

let aliyah = new Tejuosho("Aliyah", 2016, "Taiwo", "Chicago", [
  "singing",
  "jumping",
  "playing",
]);

class Taiwo extends Tejuosho {
  constructor(
    name,
    year,
    branch,
    location,
    interests,
    skills,
    hobbies,
    wife,
    names,
    nickname
  ) {
    super(name, year, branch, location, interests);
    (this.skills = skills),
      (this.hobbies = hobbies),
      (this.wife = wife),
      (this.names = names),
      (this.nickname = nickname);
  }
  getNames() {
    console.log(`My names are ${this.names}`);
  }
}

let flowz = new Taiwo(
  "Taiwo",
  1985,
  "Ajao",
  "Chicago",
  ["Travelling", "Photography"],
  ["Programmer", "Computer Engineer"],
  ["Driving", "Technology", "Automobiles"],
  "Ashanti",
  ["Mobolaji", "Adebowale"],
  "Flowz"
);

//flowz.goHome();

// timeoutFetch wraps the browser "fetch" api to timeout after $timeout ms.
const timeoutFetch = (url, timeout) => {
  // Implement here. Don't worry about fetch options.
  const response = fetch(url);

  return new Promise((resolve, reject) => {
    var timer = setTimeout(() => {
      reject(new Error("timeout"));
    }, timeout);

    response
      .then((data) => {
        clearTimeout(timer);
        resolve(data);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
};

// priorityRace accepts a list of $urls ordered by priority and a $timeout in
// ms. It immediately fetches all urls, and returns the response from the
// highest priority url that succeeds before the $timeout deadline.
// @params: $urls: string[], $timeout: number
// @returns: Promise
const priorityRace = (urls, timeout) => {
  // Implement here.
  var urlArray = [];
  for (var i = 0; i < urls.length; i++) {
    urlArray.push(timeoutFetch(url[i], timeout));
  }

  Promise.allSettled(urlArray).then((results) => {
    for (var i = 0; i < results.length; i++) {
      if (results[i].status === "fulfilled") {
        return result.value;
      }
    }
  });
};

function partition(arr, l, r) {
  let pivot = arr[r];
  let j = arr[0];
  let i = arr[l - 1];
  while (j < r - 1) {
    if (arr[j] < pivot) {
      arr.splice(i, 0, arr[j]);
      arr.splice(j, 0, arr[i]);
      i++;
    }
  }
}

//Google FooBar
let longString = "2357111317192329";

function getMinionId(numberDrawn) {
  return longString.substring(numberDrawn, numberDrawn + 5);
}

//console.log(getMinionId(3)); //Returns 71113
//console.log(getMinionId(0)); //Returns 23571

//Versioned Store
class VersionedStore {
  constructor() {
    this.store = [{}];
    this.version = 0;
  }

  get(key) {
    return this.store.at(this.version)[key];
  }

  set(key, value) {
    // make copy of last version object
    // add key and value to copy
    // push copy onto store array
    const copy = Object.assign(this.store[this.version], { [key]: value });
    this.store.push(copy);
    this.version++;
  }

  getVersion() {
    return this.version;
  }

  getAtVersion(versionId, key) {
    return this.store.at(versionId)[key];
  }
}

const store = new VersionedStore();
store.set("a", 5);
////console.log(store.get("a")); // should return 5

let bioData = {};
bioData["Name"] = "Taiwo";
bioData.Age = 90;
//console.log(bioData);

//Problem: Given an array nums and a target target, return indices of two numbers that add up to target.
let numbersArray = [2, 5, 7, 9, 6, 11, 14, 3];
function twoSum(numbersArray, target) {
  let indices = [];
  let mapper = new Map();
  for (let i = 0; i < numbersArray.length; i++) {
    let diff = target - numbersArray[i];
    mapper.set(numbersArray[i], i);
    if (mapper.has(diff)) {
      indices.push([mapper.get(diff) + 1, i + 1]);
    }
  }
  return indices;
}

//console.log(twoSum(numbersArray, 17));

fizzBuzz = (n) => {
  let res = [];
  for (let i = 1; i < n; i++) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      res.push("FizzBuzz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else {
      res.push(i);
    }
  }
  console.log(res.join(","));
};

fizzBuzz(20);

function shiftString(str, leftShifts, rightShifts) {
  let shiftyString = str.split("");

  for (var i = 0; i < leftShifts; i++) {
    let shiftChar = shiftyString.shift();
    shiftyString.push(shiftChar);
  }

  for (var j = 0; j < rightShifts; j++) {
    let shiftCharr = shiftyString.pop();
    shiftyString.unshift(shiftCharr);
  }

  return shiftyString.join("");
}

function shiftStrings(str, leftShifts, rightShifts) {
  // Normalize shifts to avoid unnecessary full rotations
  const netShifts = (leftShifts - rightShifts) % str.length;
  console.log(netShifts);

  // If netShifts is 0, no need to shift
  if (netShifts === 0) {
    return str;
  }

  // For positive netShifts, perform left shift
  if (netShifts > 0) {
    return str.slice(netShifts) + str.slice(0, netShifts);
  }

  // For negative netShifts, perform right shift
  const positiveShifts = Math.abs(netShifts);
  return str.slice(-positiveShifts) + str.slice(0, -positiveShifts);
}

//console.log(shiftString("abcdefg", 3, 4));
//console.log(shiftStrings("abcdefg", 1, 4));

function getTargetSumIndices(numberArray, target) {
  let targetSumIndices = []; // Array to store index pairs

  // Return empty array if input array is empty
  if (numberArray.length < 1) {
    return targetSumIndices;
  }

  let numberMap = new Map(); // HashMap to store numbers and their indices

  for (let i = 0; i < numberArray.length; i++) {
    let complement = target - numberArray[i]; // Find the complement value needed to reach the target

    // Check if the complement exists in the map
    if (numberMap.has(complement)) {
      // Push the 1-based indices of the complement and the current number
      targetSumIndices.push([numberMap.get(complement) + 1, i + 1]);
    }

    // Store the current number and its index in the map
    numberMap.set(numberArray[i], i);
  }

  return targetSumIndices; // Return all found index pairs
}

console.log(getTargetSumIndices([1, 7, 5, 12, 14, 21, 3, 22, 4], 26)); // Returns [ [ 4, 5 ], [ 3, 6 ], [ 8, 9 ] ]
console.log(getTargetSumIndices([10, 4, 6, 15, 8, 2, 12, 20, 5], 22)); // Returns [ [ 1, 7 ], [ 6, 8 ] ]
