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
  if (loanType == 0) {
    loanTypeDescription = "VA or 0% Down at ";
  }
  if (loanType == 1) {
    loanTypeDescription = "FHA with 3.5% Down payment at ";
    return listPrice * 0.035;
  }
  if (loanType == 2) {
    loanTypeDescription = "Conventional with 5% Down payment at ";
    return listPrice * 0.05;
  }
  if (loanType == 3) {
    loanTypeDescription = "Conventional with 10% Down Payment at ";
    return listPrice * 0.1;
  }
  if (loanType == 4) {
    loanTypeDescription = "Conventional with 20% Down Payment at ";
    return listPrice * 0.2;
  }
  if (loanType == 5) {
    loanTypeDescription = "Conventional with 25% Down Payment at ";
    return listPrice * 0.25;
  }
  return 0;
}

function getEstimatedPMI() {}

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

function getAnnualIncome(totalMonthlyRent, garageIncome, coinLaundryIncome) {
  let annualRent = totalMonthlyRent * 12;
  let vacancyDeduction = parseFloat(annualRent) * 0.05;
  let estimatedRentIncome = parseFloat(annualRent) - vacancyDeduction;
  var totalAnnualIncome =
    parseInt(estimatedRentIncome) +
    parseInt(garageIncome) +
    parseInt(coinLaundryIncome);

  return totalAnnualIncome;
}

function getEstimatedCashToClose(listPrice, loanType) {
  let dp = getDownPayment(listPrice, loanType);
  let lowClosingCosts = (Number(listPrice) - dp) * 0.03 + dp;
  let highClosingCosts = (Number(listPrice) - dp) * 0.05 + dp;
  return { lowerLimit: lowClosingCosts, upperLimit: highClosingCosts };
}

function formatAsMoney(amount) {
  let formattedAmount = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  // If the decimal part is ".00", remove it
  if (formattedAmount.endsWith(".00")) {
    formattedAmount = formattedAmount.slice(0, -3);
  }

  return `$${formattedAmount}`;
}

function getYesNoOptions() {
  console.log("Enter 1 for Yes: ");
  console.log("Enter 2 for No: ");
}

console.log("\x1b[33m", "\n*****************************************");
console.log("WELCOME TO THE MULTI UNIT DEAL ANALYZER");
console.log("*****************************************");
console.log("\nPlease Select Loan Type");
console.log("Enter 0 for VA or 0 Down");
console.log("Enter 1 for FHA 3.5% Down");
console.log("Enter 2 for Conventional 5% Down");
console.log("Enter 3 for Conventional 10% Down");
console.log("Enter 4 for Conventional 20% Down");
console.log("Enter 5 for Conventional 25% Down\n");
console.log("Enter 99 to exit at anytime\n", "\x1b[0m", "\x1b[0m");

let loanType = prompt("Enter value for Loan Type: ");

while (!Number(loanType) || loanType < 0 || loanType > 5) {
  shouldIExit(Number(loanType));
  console.log("\x1b[31m", "\nPlease enter 0, 1, 2, 3, 4 or 5", "\x1b[0m");
  loanType = prompt("Enter value for Loan Type: ");
}

let unitCount = prompt("Please enter number of units: ");
let listPrice = prompt("Please enter List Price: ");
let downPayment = getDownPayment(listPrice, loanType);
let interestRate = prompt("Please enter loan interest rate: ");
let loanTermYears = prompt("Please enter the loan term (5, 15 or 30yrs): ");
let loanAmount = listPrice - downPayment;

let totalEstimatedRent = prompt(
  "Please enter the total monthly rent amount for all the units: "
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
  parseFloat(interestRate).toFixed(1),
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

let monthlyPropertyTaxes = propertyTaxes / 12;
let monthlyInsuranceCost = insuranceCost / 12;
let totalMonthlyPayment =
  parseFloat(mortgageDetails.monthlyPayment) +
  parseFloat(monthlyPropertyTaxes) +
  parseFloat(monthlyInsuranceCost);

let monthlyWaterBill = parseFloat(waterBill) / 12;
let monthlyMaintenanceCost = parseFloat(maintenanceCost) / 12;
let totalMonthlyExpenses =
  totalMonthlyPayment + monthlyWaterBill + monthlyMaintenanceCost;
let annualRent = totalEstimatedRent * 12;
let vacancyDeduction = parseFloat(annualRent) * 0.05;

let expenses =
  parseFloat(propertyTaxes) +
  parseFloat(waterBill) +
  parseFloat(insuranceCost) +
  parseFloat(maintenanceCost) +
  parseFloat(vacancyDeduction);

let estimatedClosingCosts = getEstimatedCashToClose(listPrice, loanType);

let noi = annualIncome - expenses;
let capRate = ((noi / listPrice) * 100).toFixed(2);
let annualCashFlow = noi - totalFirstYearPayment;
let cocReturn = ((annualCashFlow / downPayment) * 100).toFixed(2);

console.log("\x1b[33m", "\n************************************");
console.log("        Deal Analysis Report");
console.log("************************************");
console.log("Loan Details: " + loanTypeDescription + interestRate + "%");
console.log("Annual Income: " + formatAsMoney(annualIncome));
console.log("Annual Expenses: " + formatAsMoney(expenses));
console.log("Property List Price: " + formatAsMoney(Number(listPrice)));
console.log("Down Payment: " + formatAsMoney(downPayment));
console.log(
  "Estimated Cash to Close: " +
    formatAsMoney(estimatedClosingCosts.lowerLimit) +
    " - " +
    formatAsMoney(estimatedClosingCosts.upperLimit)
);
console.log(
  "Estimated Monthly Mortgage Payment (PITI): " +
    formatAsMoney(totalMonthlyPayment)
);
console.log(
  "Estimated Monthly Expenses: " + formatAsMoney(totalMonthlyExpenses)
);
console.log("Net Operating Income (NOI): " + formatAsMoney(noi));
console.log("Capitalization Rate: " + capRate + "%");
console.log("Annual Cash Flow: " + formatAsMoney(annualCashFlow));
console.log("Monthly Cash Flow: " + formatAsMoney(annualCashFlow / 12));
console.log("Cash On Cash Return: " + cocReturn + "%");
console.log("****************************************");
console.log("****************************************");

let message = prompt("Message: ");
runQuestionModels(message);

function runQuestionModels(message) {
  if (message.includes("monthly payment") || message.includes("piti")) {
    console.log(
      `Your estimated monthly payment will be about ${formatAsMoney(
        totalMonthlyPayment
      )}. This includes the Principal & Interest (${formatAsMoney(
        mortgageDetails.monthlyPayment
      )}), taxes (${formatAsMoney(
        monthlyPropertyTaxes
      )}), insurance (${formatAsMoney(monthlyInsuranceCost)})`
    );
  }

  if (
    message.includes("closing costs") ||
    message.includes("needed to close")
  ) {
    console.log(
      "Estimated cash required to close this deal is between 3% and 5% of the loan amount. This equates to between " +
        formatAsMoney(estimatedClosingCosts.lowerLimit) +
        " and " +
        formatAsMoney(estimatedClosingCosts.upperLimit) +
        ". This includes the down payment of " +
        formatAsMoney(downPayment) +
        "."
    );
  }
  if (message.includes("net operating income") || message.includes("noi")) {
    console.log("The Net Operating Income (NOI) is " + formatAsMoney(noi));
  }
  if (message.includes("cash on cash return")) {
    console.log(
      "Cash On Cash Return for this deal will be about " + cocReturn + "%"
    );
  }

  if (message.includes("cash flow")) {
    console.log(
      "The monthly cash flow for this deal will be about " +
        formatAsMoney(annualCashFlow / 12) +
        ". Resulting in an annual cash flow of " +
        formatAsMoney(annualCashFlow) +
        "."
    );
  }

  if (message.includes("capitalization rate") || message.includes("cap rate")) {
    console.log("The capitalization rate for this deal is " + capRate + "%");
  }
}

while (message != "99") {
  message = prompt("Message: ");
  runQuestionModels(message);
}
