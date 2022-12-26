//this line give you all your arguments in an array
const myArguments = process.argv.slice(2);

// Operation to be performed
const operation = process.argv[2];

//first & second arguments converted to numbers
const arg1 = Number(process.argv[3]);
const arg2 = Number(process.argv[4]);
const arg3 = Number(process.argv[5]);

function getSquare(arg1) {
  return Math.pow(arg1, 2);
}

function add(arg1, arg2) {
  return arg1 + arg2;
}

function multiply(arg1, arg2) {
  let answer = arg1 * arg2;
  if (answer % 1 != 0) {
    return answer.toFixed(2);
  }
  return answer;
}

function divide(arg1, arg2) {
  let answer = arg1 / arg2;
  if (answer % 1 != 0) {
    return answer.toFixed(2);
  }
  return answer;
}

function percentage(arg1, arg2) {
  return ((100 * arg1) / arg2).toFixed(2);
}

function squareRoot(arg1) {
  return Math.sqrt(arg1).toFixed(2);
}

function getProgression(l, u, i) {
  let progression = [];
  while (l <= u) {
    progression.push(parseFloat(l.toFixed(1)));
    l = l + i;
  }
  return progression;
}

if (operation == "progression") {
  console.log(getProgression(arg1, arg2, arg3));
}

if (operation == "add") {
  console.log("Sum =", add(arg1, arg2));
}

if (operation == "square") {
  console.log("Square = ", getSquare(arg1));
}

if (operation == "multiply") {
  console.log("Product = ", multiply(arg1, arg2));
}

if (operation == "divide") {
  console.log(`${arg1} divided by ${arg2} = ${divide(arg1, arg2)}`);
}

if (operation == "percentage") {
  console.log(`${arg1} is ${percentage(arg1, arg2)}% of ${arg2}`);
}

if (operation == "squareroot") {
  console.log(`Square Root of ${arg1} is ${squareRoot(arg1)}`);
}

if (operation == "help") {
  console.log("Welcome to calc v1\n");
  console.log(
    "Valid commands are add, subtract, divide, multiply, percentage, square, & squareroot\n"
  );
  console.log(
    "Sample command => node calc multiply 67 8 => returns the product of 67 & 8"
  );
  console.log(
    "Sample command => node calc percentage 15 200 => returns the % of 15 out of 200\n"
  );
}
