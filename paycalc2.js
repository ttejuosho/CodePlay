$(document).ready(function() {


// Hide warnings on load
$("#results").hide();
$(".alert").hide();
var incomeData = {};

// Set a listener on the calculate button
$("#magic").on("click", function(){

    var hourlyRate = $("#hourlyRate").val();
    var hoursWorked = $("#hoursWorked").val();
    var allowanceClaimed = $("#allowanceClaimed").val();

        // Form Validation
        if (hourlyRate === "") {
            $("#hourlyRate").toggleClass("animated shake");
        } else if (hoursWorked === "") {
            $("#hoursWorked").toggleClass("animated shake");
        } else if (allowanceClaimed === "") {
            $("#allowanceClaimed").toggleClass("animated shake");
        } else {
            $(".alert").hide();
            
        // set work status in report
        if (hoursWorked < 40) {
            var workStatus = "Part Time";
        } else {
            workStatus = "Full Time";
        }

    var maritalStatus = $('input[name="maritalStatus"]:checked').val();
    var payPeriod = $('input[name="payPeriod"]:checked').val();
    var deductionPoint = $('input[name="beforeAfterTax"]:checked').val();
    var deductionRate = $(".deduction").val();
    var salary = calcSalary(hourlyRate, hoursWorked, payPeriod);
    var biWeeklyPay = salary.biWeeklyPay;
    var weeklyFTPay = (salary.weeklyFTPay).toFixed(2);
    var biWeeklyFTPay = (weeklyFTPay*2).toFixed(2);
    var overtimeHours = (salary.overtimeHours).toFixed(2);
    var overtimePay = (salary.overtimePay).toFixed(2);
    var annualPay = (weeklyFTPay*52).toFixed(2);
    var amtSubjectToWithholding = calcTaxable(biWeeklyPay,allowanceClaimed);
    var withheldTax = calcTax(amtSubjectToWithholding);
    var biWeeklyPayAfterTax = biWeeklyPay - withheldTax;
    var deduction = calcDeduction(deductionRate, deductionPoint, biWeeklyPay, biWeeklyPayAfterTax);

// All data generated from the data collected and the data collected in one object
    incomeData = {  biWeeklyPay: biWeeklyPay,
                    weeklyFTPay: weeklyFTPay,
                    overtimeHours: overtimeHours,
                    overtimePay: overtimePay,
                    hourlyRate:hourlyRate,
                    hoursWorked: hoursWorked,
                    maritalStatus: maritalStatus,
                    payPeriod: payPeriod,
                    allowanceClaimed: allowanceClaimed,
                    amtSubjectToWithholding: amtSubjectToWithholding,
                    biWeeklyFTPay: biWeeklyFTPay,
                    workStatus: workStatus,
                    deduction: deduction,
                    deductionPoint: deductionPoint,
                    deductionRate: deductionRate,
                    withheldTax: withheldTax,
                    biWeeklyPayAfterTax: biWeeklyPayAfterTax,
                    annualPay: annualPay,
                };

                console.log(incomeData);

// Show the results Div, display results on webpage and clear the form
        $("#results").show();
        renderResults(incomeData);
        clearForm();
}
});


validateForm = () => {
    // Form Validation
    if (hourlyRate === "") {
        $("#hourlyRate").toggleClass("animated shake");
    } else if (hoursWorked === "") {
        $("#hoursWorked").toggleClass("animated shake");
    } else if (allowanceClaimed === "") {
        $("#allowanceClaimed").toggleClass("animated shake");
    } else {
        $(".alert").hide();
        $("#results").show();
    }
};

// Calculate Salary
calcSalary = (hourlyRate, hoursWorked, payPeriod) => {
    var weeklyFTPay = hourlyRate * 40;
    if (payPeriod === 'Weekly'){
        var overtimeHours = (hoursWorked - 40)*2;
    } else if (payPeriod === 'Bi-Weekly'){
        overtimeHours = hoursWorked - 80;
    }      
    var overtimePay = overtimeHours * hourlyRate * 1.5;
    var weeklyPay = weeklyFTPay + overtimePay;
    var biWeeklyPay = (weeklyPay*2).toFixed(2);
    
    return {    biWeeklyPay: biWeeklyPay,
                weeklyFTPay: weeklyFTPay,
                overtimeHours: overtimeHours,
                overtimePay: overtimePay
        };
};

// Calculate Taxable Income
calcTaxable = (biWeeklyPay, allowanceClaimed) => {
    let totalAllowance = (allowanceClaimed * 79.8).toFixed(2);
    let amtSubjectToWithholding = biWeeklyPay - totalAllowance;
        return amtSubjectToWithholding;          
};

// Calculate Tax to be withheld
calcTax = (amtSubjectToWithholding) => {
    var maritalStatus = $('input[name="maritalStatus"]:checked').val();

    if (maritalStatus === 'Single') {
        // Choose Tax Brackets based on Weekly Pay to calculate Taxes for Singles
        if (amtSubjectToWithholding > 71 && 
            amtSubjectToWithholding < 254) {
            let taxableIncome = amtSubjectToWithholding - 71;
            weeklyWithheldTax = taxableIncome * 0.1;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 254 &&
            amtSubjectToWithholding < 815
        ) {
            let taxableIncome = amtSubjectToWithholding - 254;
            weeklyWithheldTax = taxableIncome * 0.12 + 18.3;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 815 &&
            amtSubjectToWithholding < 1658
        ) {
            let taxableIncome = amtSubjectToWithholding - 815;
            weeklyWithheldTax = taxableIncome * 0.22 + 85.62;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 1658 &&
            amtSubjectToWithholding < 3100
        ) {
            let taxableIncome = amtSubjectToWithholding - 1658;
            weeklyWithheldTax = taxableIncome * 0.24 + 271.08;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 3100 &&
            amtSubjectToWithholding < 3917
        ) {
            let taxableIncome = amtSubjectToWithholding - 3100;
            weeklyWithheldTax = taxableIncome * 0.32 + 617.16;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 3917 &&
            amtSubjectToWithholding < 9687
        ) {
            let taxableIncome = amtSubjectToWithholding - 3917;
            weeklyWithheldTax = taxableIncome * 0.35 + 878.6;
            return weeklyWithheldTax;
        } else if (amtSubjectToWithholding > 9687) {
            let taxableIncome = amtSubjectToWithholding - 9687;
            weeklyWithheldTax = taxableIncome * 0.37 + 2898.1;
            return weeklyWithheldTax;
        } else {
            weeklyWithheldTax = 0;
            return weeklyWithheldTax;
        }
    } else if (maritalStatus === 'Married') {
        // Choose Tax Brackets based on Weekly Pay to calculate Taxes for Married
        if (amtSubjectToWithholding > 222 && amtSubjectToWithholding < 588) {
            let taxableIncome = amtSubjectToWithholding - 222;
            weeklyWithheldTax = taxableIncome * 0.1;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 588 &&
            amtSubjectToWithholding < 1711
        ) {
            let taxableIncome = amtSubjectToWithholding - 588;
            weeklyWithheldTax = taxableIncome * 0.12 + 36.6;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 1711 &&
            amtSubjectToWithholding < 3395
        ) {
            let taxableIncome = amtSubjectToWithholding - 1711;
            weeklyWithheldTax = taxableIncome * 0.22 + 171.36;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 3395 &&
            amtSubjectToWithholding < 6280
        ) {
            let taxableIncome = amtSubjectToWithholding - 3395;
            weeklyWithheldTax = taxableIncome * 0.24 + 541.84;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 6280 &&
            amtSubjectToWithholding < 7914
        ) {
            let taxableIncome = amtSubjectToWithholding - 6280;
            weeklyWithheldTax = taxableIncome * 0.32 + 1234.24;
            return weeklyWithheldTax;
        } else if (
            amtSubjectToWithholding > 7914 &&
            amtSubjectToWithholding < 11761
        ) {
            let taxableIncome = amtSubjectToWithholding - 7914;
            weeklyWithheldTax = taxableIncome * 0.35 + 1757.12;
            return weeklyWithheldTax;
        } else if (amtSubjectToWithholding > 11761) {
            let taxableIncome = amtSubjectToWithholding - 11761;
            weeklyWithheldTax = taxableIncome * 0.37 + 3103.57;
            return weeklyWithheldTax;
        } else {
            weeklyWithheldTax = 0;
            return weeklyWithheldTax;
        }
    }
};

// This function calculates the deduction
calcDeduction = (deductionRate, deductionPoint, biWeeklyPay, biWeeklyPayAfterTax) =>{ 
    if (deductionPoint === "After Tax"){
        return (biWeeklyPayAfterTax * (deductionRate / 100)); 
    } else if (deductionPoint === "Before Tax"){
        return (biWeeklyPay *  (deductionRate / 100));
    } else {
        return 0;
    }
    
};


// Render result to web page
renderResults = incomeData => { 

 $("#results").html(`
 <table class="table table-striped">
     <thead>
         <tr>
         <th scope="col">Income Analysis</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Hourly Rate</td>
             <td>$${incomeData.hourlyRate}</td>
         </tr>
         <tr>
             <td>Hours Worked</td>
             <td>${incomeData.hoursWorked}</td>
         </tr>
         <tr>
             <td>Work Status</td>
             <td>${incomeData.workStatus}</td>
         </tr>
         <tr>
             <td>Full Time Pay</td>
             <td>${numeral(incomeData.biWeeklyFTPay).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Overtime Pay</td>
             <td>${numeral(incomeData.overtimePay).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Gross Pay</td>
             <td>${numeral(incomeData.biWeeklyPay).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Withheld Tax</td>
             <td>${numeral(incomeData.withheldTax).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>After Tax Pay</td>
             <td>${numeral(incomeData.biWeeklyPayAfterTax).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Total Deductions</td>
             <td>${numeral(incomeData.deduction).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Annual Income</td>
             <td>${numeral(incomeData.annualPay).format("$0,0.00")}</td>
         </tr>
     </tbody>
 </table>
 `);
};


// Set Listener on deductions link to create form for deductions
renderDeductionInput = () => {
        let entryForm = $("#deductionsDiv");
        let newInputDiv = $("<div>").addClass("col");
        let beforeTaxCheckDiv = $("<div>").addClass("form-check form-check-inline");
        let afterTaxCheckDiv = $("<div>").addClass("form-check form-check-inline");
        let beforeTaxLabel = $("<label>")
            .addClass("form-check-label")
            .text("Before Tax");
        let afterTaxLabel = $("<label>")
            .addClass("form-check-label")
            .text("After Tax");
        let deductionBox = $("<input>")
            .addClass("form-control deduction")
            .attr("placeholder", "Enter Deduction %");
        let beforeTaxInput = $("<input>")
            .addClass("form-check-input beforeTax")
            .attr("type", "radio")
            .attr("name", "beforeAfterTax")
            .attr("value", "Before Tax");
        let afterTaxInput = $("<input checked>")
            .addClass("form-check-input afterTax")
            .attr("type", "radio")
            .attr("name", "beforeAfterTax")
            .attr("value", "After Tax");
        let beforeTaxCheckBox = beforeTaxCheckDiv
            .append(beforeTaxInput)
            .append(beforeTaxLabel);
        let afterTaxCheckBox = afterTaxCheckDiv
            .append(afterTaxInput)
            .append(afterTaxLabel);
        let newFieldBox = newInputDiv.append(deductionBox);
        let removeDeductionButton = $("<button>")
            .addClass("removeDeduction btn btn-outline-danger btn-sm")
            .text("x");
        newInputDiv.append(beforeTaxCheckBox);
        newInputDiv.append(afterTaxCheckBox);
        newInputDiv.append(removeDeductionButton);
        entryForm.append(newFieldBox);
};

// this function clears the form on submit
clearForm = () => {
        // Clear form fields
        $("#hoursWorked").val("");
        $("#hourlyRate").val("");
        $("#allowanceClaimed").val("");
        $(".deduction").val("");
};



// Add a listener to create the deduction input form
$(".addInputBox").on("click", renderDeductionInput);

});