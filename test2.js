$(document).ready(function(){
    console.log("SYSTEM READY");

    $("#results").hide();
    $(".alert").hide();

    function calculateSalary(hourlyRate, hoursWorked, allowanceClaimed){
        let overtimeHours = (hoursWorked - 40);
        let overTimePay = (overtimeHours*hourlyRate*1.5);
        let weeklyFTPay = (hourlyRate*40);
        let weeklyPay = (weeklyFTPay + overTimePay);
        let withheldAmount = (allowanceClaimed*79.8).toFixed(2);
        let amtSubjectToWithholding = (weeklyPay - withheldAmount).toFixed(2);
        let biWeeklyPay = (weeklyPay*2).toFixed(2);
        let monthlyPay = (biWeeklyPay*2).toFixed(2);
        let annualPay = (weeklyFTPay*52).toFixed(2);
        let weeklyTax = 0;
        

    // Choose Tax Brackets based on Annual Pay to calculate Taxes
    if ( amtSubjectToWithholding > 71 && amtSubjectToWithholding < 254 ){
        let taxableIncome = (amtSubjectToWithholding - 71);
            weeklyTax = taxableIncome*0.1;
    } else if ( amtSubjectToWithholding > 254  && amtSubjectToWithholding < 815 ){
        let taxableIncome = (amtSubjectToWithholding - 254);
            weeklyTax = (taxableIncome*0.12) + 18.30;
    } else if ( amtSubjectToWithholding > 815  && amtSubjectToWithholding < 1658 ){
        let taxableIncome = (amtSubjectToWithholding - 815);
            weeklyTax = (taxableIncome*0.22) + 85.62;
    } else if ( amtSubjectToWithholding > 1658  && amtSubjectToWithholding < 3100 ){
        let taxableIncome = (amtSubjectToWithholding - 1658);
            weeklyTax = (taxableIncome*0.24) + 271.08;
    } else if ( amtSubjectToWithholding > 3100  && amtSubjectToWithholding < 3917 ){
        let taxableIncome = (amtSubjectToWithholding - 3100);
            weeklyTax = (taxableIncome*0.32) + 617.16;
    }  else if ( amtSubjectToWithholding > 3917  && amtSubjectToWithholding < 9687 ){
        let taxableIncome = (amtSubjectToWithholding - 3917);
            weeklyTax = (taxableIncome*0.35) + 878.6;
    } else {
        let taxableIncome = (amtSubjectToWithholding - 9687);
            weeklyTax = (taxableIncome*0.37) + 2898.10;
    }

    console.log(weeklyTax);
    let weeklyPayAfterTax = (weeklyPay - weeklyTax).toFixed(2);
    let biWeeklyPayAfterTax = (weeklyPayAfterTax*2).toFixed(2);
    let monthlyPayAfterTax = (biWeeklyPayAfterTax*2).toFixed(2);
    let annualPayAfterTax = (monthlyPayAfterTax*12).toFixed(2);
    let biWeeklyTax = (weeklyTax*2).toFixed(2);
    let monthlyTax = (biWeeklyTax*2).toFixed(2);
    let annualTax = (monthlyTax*12).toFixed(2);
    let workStatus = "Full Time";

    // set work status in report
    if (hoursWorked < 40){  workStatus = "Part Time" }

    // Render result to web page
    $("#results").html(`
        If you earn $${hourlyRate}/hour and you work ${workStatus} (${hoursWorked} hours),<br> 
        Bi-Weekly Gross Pay: $${biWeeklyPay}, <br>
        Monthly Gross Pay: $${monthlyPay}, <br>  
        You'll get approximately $${biWeeklyPayAfterTax} every 2 weeks <br> 
        Annual Pay: $${annualPay}<br>
        And you'll get $${annualPayAfterTax} yearly after tax.
        `);
    }

    // End of function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // Add listener to calculate button to calculate and render results
    $("#magic").on("click", function(){

        // Save input values in variables
        let hoursWorked = $("#hoursWorked").val();
        let hourlyRate = $("#hourlyRate").val();
        let single = $('input[name="inlineRadioOptions"]:checked').val();
        let married = $('input[name="inlineRadioOptions"]:checked').val();
        let allowanceClaimed = $('#allowanceClaimed').val();
        let deduction = $('.deduction').val();

// Form Validation
        if (hourlyRate === ""){
            $("#hourlyRate").toggleClass("animated shake");
        } 
        else if (hoursWorked === ""){
            $("#hoursWorked").toggleClass("animated shake");
        }  else if (allowanceClaimed === ""){
            $("#allowanceClaimed").toggleClass("animated shake");
        }  else if (single == undefined && married == undefined){
            $(".alert").show();
        } else {
                $(".alert").hide();
                $("#results").show();

                // Call function to calculate income
                calculateSalary(hourlyRate, hoursWorked, allowanceClaimed);
                // console.log(deduction);
                
                // Clear form fields
                $("#hoursWorked").val("");
                $("#hourlyRate").val("");
                $('#allowanceClaimed').val("");
                $('.deduction').val("");
            }

});

// Set Listener on deductions link to create form for deductions
$(".addInputBox").on("click", function (){
    let entryForm = $('#deductionsDiv');
    let newInputDiv = $('<div>').addClass('col');
    let beforeTaxCheckDiv = $('<div>').addClass('form-check form-check-inline');
    let afterTaxCheckDiv = $('<div>').addClass('form-check form-check-inline');
    let beforeTaxLabel = $('<label>').addClass('form-check-label').text('Before Tax');
    let afterTaxLabel = $('<label>').addClass('form-check-label').text('After Tax');
    let deductionInput = $('<input>').addClass('form-control deduction').attr('placeholder', 'Enter Deduction %');
    let beforeTaxInput = $('<input>').addClass('form-check-input beforeTax').attr('type', 'radio').attr('name', 'beforeAfterTax');
    let afterTaxInput = $('<input>').addClass('form-check-input afterTax').attr('type', 'radio').attr('name', 'beforeAfterTax');
    let beforeTaxCheckBox = beforeTaxCheckDiv.append(beforeTaxInput).append(beforeTaxLabel);  
    let afterTaxCheckBox = afterTaxCheckDiv.append(afterTaxInput).append(afterTaxLabel);
    let newFieldBox = newInputDiv.append(deductionInput);
    let removeDeductionButton = $('<button>').addClass('removeDeduction btn btn-outline-danger btn-sm').text("x");
    newInputDiv.append(beforeTaxCheckBox);
    newInputDiv.append(afterTaxCheckBox);
    newInputDiv.append(removeDeductionButton);
    entryForm.append(newFieldBox);
})
});
    
