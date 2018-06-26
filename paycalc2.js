
var workStatus = "Full Time";
var allowanceClaimed = $("#allowanceClaimed").val();
var deductionPoint = $('input[name="beforeAfterTax"]:checked').val();

// Hide warnings on load
$("#results").hide();
$(".alert").hide();

// set work status in report
if (hoursWorked < 40) {
    workStatus = "Part Time";
}

validateForm = () => {
    // Form Validation
    if (hourlyRate === "") {
        $("#hourlyRate").toggleClass("animated shake");
    } else if (hoursWorked === "") {
        $("#hoursWorked").toggleClass("animated shake");
    } else if (allowanceClaimed === "") {
        $("#allowanceClaimed").toggleClass("animated shake");
    } else if ((maritalStatus = undefined)) {
        $(".alert").show();
    } else {
        $(".alert").hide();
        $("#results").show();
    }
};

calcSalary = () => {
    let hoursWorked = $("#hoursWorked").val();
    let hourlyRate = $("#hourlyRate").val();
    let payPeriod = $('input[name="payPeriod"]:checked').val();
    let weeklyFTPay = hourlyRate * 40;
    if (payPeriod === 'Weekly'){
        let overtimeHours = hoursWorked - 40;
    } else {
        overtimeHours = hoursWorked - 80;
    }      
    let overtimePay = overtimeHours * hourlyRate * 1.5;
    let weeklyPay = weeklyFTPay + overtimePay;
    let biWeeklyPay = (weeklyPay*2).toFixed(2);
    return biWeeklyPay;
};

calcTaxable = (biWeeklyPay, allowanceClaimed) => {
    let totalAllowance = (allowanceClaimed * 79.8).toFixed(2);
    let amtSubjectToWithholding = biWeeklyPay - totalAllowance;
        return amtSubjectToWithholding;          
};

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

calcDeduction = (weeklyPay) =>{
    let deductionRate = $(".deduction").val();
    return weeklyPay * (deductionRate / 100); 
};

// Render result to web page
renderResults = () => { 

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
             <td>$${hourlyRate}</td>
         </tr>
         <tr>
             <td>Hours Worked</td>
             <td>${hoursWorked}</td>
         </tr>
         <tr>
             <td>Work Status</td>
             <td>${workStatus}</td>
         </tr>
         <tr>
             <td>Full Time Pay</td>
             <td>${numeral(biWeeklyFTPay).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Overtime Pay</td>
             <td>${numeral(overTimePay).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Gross Pay</td>
             <td>${numeral(biWeeklyPay).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Tax Deductions</td>
             <td>${numeral(biWeeklyTax).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>After Tax Pay</td>
             <td>${numeral(biWeeklyPayAfterTax).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Total Deductions</td>
             <td>${numeral(biWeeklyDeduction).format("$0,0.00")}</td>
         </tr>
         <tr>
             <td>Annual Income</td>
             <td>${numeral(annualPay).format("$0,0.00")}</td>
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

clearForm = () => {
        // Clear form fields
        $("#hoursWorked").val("");
        $("#hourlyRate").val("");
        $("#allowanceClaimed").val("");
        $(".deduction").val("");
};

incomeAnalysis = () => {
    var weeklyPay = calcSalary();
    var amtSubjectToWithholding = calcTaxable(3, weeklyPay);
    var wwt = calcTax(amtSubjectToWithholding);
    var deductions = calcDeduction(0, weeklyPay);
    console.log('Weekly Pay => ', weeklyPay);
    console.log('Taxable Income => ', amtSubjectToWithholding);
    console.log('Withheld Amount => ', wwt);
    console.log('Deduction => ', deductions);
}



$(".addInputBox").on("click", renderDeductionInput);

$("#magic").on("click", function(){
    validateForm();
    incomeAnalysis();
    renderResults();
    clearForm();
});