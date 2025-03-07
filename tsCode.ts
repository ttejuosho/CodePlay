//Tuple sample in TypeScript
let tuple: [string, number] = ["Alice", 30];
console.log(tuple[0]); // "Alice"
console.log(tuple[1]); // 30

//IsDuoDigit function in TypeScript
function isDuoDigit(num: number): boolean {
  return num >= 10 && num <= 99;
}

// Calculate Average of an array of numbers
const arr = [1, 2, 3, 4, 5];

// Filter to include only numbers
const numbers = arr.filter((element) => typeof element === "number");

// Calculate sum of the numbers
const sum = arr.reduce((acc, current) => acc + current, 0);

// Calculate average
const average = sum / arr.length;

console.log(average); // Output: 3

// Calculate Average of an array of numbers with FILTERING
const arr = [1, 2, "hello", 3, 4, true, 5];

// Filter to include only numbers
const numbers = arr.filter((element) => typeof element === "number");

// Calculate sum of the numbers
const sum = numbers.reduce((acc, current) => acc + current, 0);

// Calculate average
const average = sum / numbers.length;

console.log(average); // Output: 3
