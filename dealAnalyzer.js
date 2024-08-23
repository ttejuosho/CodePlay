const prompt = require("prompt-sync")({ sigint: true });
let exitCode = 99;
let coinLaundryIncome = 0;
let garageIncome = 0;
let annualIncome = 0;
let loanTypeDescription = "";

function shouldIExit(number) {
  if (number == exitCode) {
    console.log("\x1b[31m", "\nExiting game. Bye !!", "\x1b[0m");
    process.exit();
  }
}

function getDownPayment(listPrice, loanType) {
  if (loanType == 1) {
    loanTypeDescription = "FHA with 3.5% Down payment at ";
    return listPrice * 0.035;
  }
  if (loanType == 2) {
    loanTypeDescription = "VA or 0% Down at ";
    return listPrice * 0;
  }
  if (loanType == 3) {
    loanTypeDescription = "Conventional with 10% Down Payment at ";
    return listPrice * 0.05;
  }
  if (loanType == 4) {
    loanTypeDescription = "Conventional with 20% Down Payment at ";
    return listPrice * 0.1;
  }
  if (loanType == 5) {
    loanTypeDescription = "Conventional with 25% Down Payment at ";
    return listPrice * 0.25;
  }
  return 0;
}

function calculateMortgage(principal, annualInterestRate, loanTermYears) {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  // Calculate the monthly payment using the formula
  const monthlyPayment =
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  // Calculate interest for the first payment
  const firstMonthInterest = principal * monthlyInterestRate;

  // Calculate principal for the first payment
  const firstMonthPrincipal = monthlyPayment - firstMonthInterest;

  let totalFirstYearPayment = 0;
  let remainingPrincipal = principal;

  for (let i = 0; i < 12; i++) {
    const interestPayment = remainingPrincipal * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingPrincipal -= principalPayment;
    totalFirstYearPayment += monthlyPayment;
  }

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalFirstYearPayment: totalFirstYearPayment.toFixed(2),
    firstMonthPrincipal: firstMonthPrincipal.toFixed(2),
    firstMonthInterest: firstMonthInterest.toFixed(2),
  };
}

function getAnnualIncome(totalEstimatedRent, garageIncome, coinLaundryIncome) {
  return (
    parseInt(totalEstimatedRent) * 12 +
    parseInt(garageIncome) +
    parseInt(coinLaundryIncome)
  );
}

function getEstimatedCashToClose(listPrice, loanType) {
  let dp = getDownPayment(listPrice, loanType);
  let closingCosts = (Number(listPrice) - dp) * 0.05;
  return closingCosts + dp;
}

function getYesNoOptions() {
  console.log("Enter 1 for Yes: ");
  console.log("Enter 2 for No: ");
}

console.log("\x1b[33m", "\n************************************");
console.log("WELCOME TO THE MULTI UNIT DEAL ANALYZER");
console.log("************************************");
console.log("\nPlease Select Loan Type");
console.log("Enter 1 for FHA 3.5% Down");
console.log("Enter 2 for VA or 0 Down");
console.log("Enter 3 for Conventional 5% Down");
console.log("Enter 4 for Conventional 10% Down");
console.log("Enter 5 for Conventional 25% Down\n");
console.log("Enter 99 to exit at anytime\n", "\x1b[0m", "\x1b[0m");

let loanType = prompt("Enter value for Loan Type: ");

while (!Number(loanType) || loanType < 1 || loanType > 5) {
  shouldIExit(Number(loanType));
  console.log("\x1b[31m", "\nPlease enter 1, 2, 3, 4 or 5", "\x1b[0m");
  loanType = prompt("Enter value for Loan Type: ");
}

let unitCount = prompt("Please enter number of units: ");
let listPrice = prompt("Please enter List Price: ");
let downPayment = getDownPayment(listPrice, loanType);
let interestRate = prompt("Please enter loan interest rate: ");
let loanTermYears = prompt("Please enter the loan term (5, 15 or 30yrs): ");
let loanAmount = listPrice - downPayment;

let totalEstimatedRent = prompt(
  "Please enter the total rent amount for all the units: "
);

getYesNoOptions();
let coinLaundryAvailable = prompt("Does building have coin laundry ?: ");

if (coinLaundryAvailable === 1) {
  coinLaundryIncome = prompt(
    "Please enter annual estimated income from coin laundry: "
  );
}

getYesNoOptions();
garageIncomeAvailable = prompt("Do you expect to rent our the garage ?: ");

if (garageIncomeAvailable === 1) {
  garageIncome = prompt("Please enter estimated annual garage income: ");
}

annualIncome = getAnnualIncome(
  totalEstimatedRent,
  garageIncome,
  coinLaundryIncome
);

const mortgageDetails = calculateMortgage(
  loanAmount,
  interestRate,
  loanTermYears
);

const totalFirstYearPayment = mortgageDetails.totalFirstYearPayment;

console.log("Next, we need to know the property taxes...");
console.log(
  "Please refer to the county property tax portal for the most accurate information"
);
let propertyTaxes = prompt(
  "Please enter your estimated annual property taxes: "
);
let waterBill = prompt(
  "Please enter your annual water bill. Enter 0 if you dont intend to cover this expense: "
);
let insuranceCost = prompt(
  "Please enter a value for your expected annual insurance costs: "
);
let maintenanceCost = prompt(
  "Please a value for your estimated maintenance cost: "
);

let expenses =
  parseInt(propertyTaxes) +
  parseInt(waterBill) +
  parseInt(insuranceCost) +
  parseInt(maintenanceCost);
let estimatedClosingCosts = getEstimatedCashToClose(listPrice, loanType);
let noi = annualIncome - expenses;
let capRate = (noi / listPrice).toFixed(2);
let annualCashFlow = noi - totalFirstYearPayment;
let cocReturn = (annualCashFlow / downPayment).toFixed(2);

console.log("Annual Income: ", annualIncome);
console.log("Annual Expenses: ", expenses);

console.log("\x1b[33m", "\n************************************");
console.log("        Deal Analysis Report");
console.log("************************************");
console.log("Loan Details: " + loanTypeDescription + interestRate + "%");
console.log("Down Payment: $" + downPayment);
console.log("Estimated Cash to Close: $" + estimatedClosingCosts);
console.log("Net Operating Income (NOI): $" + noi);
console.log("Capitalization Rate: " + capRate + "%");
console.log("Annual Cash Flow: $" + annualCashFlow.toFixed(2));
console.log("Monthly Cash Flow: $" + (annualCashFlow / 12).toFixed(2));
console.log("Cash On Cash Return: " + cocReturn + "%");
