$(document).ready(function(){
    console.log("SYSTEM READY");

    var $body = $('body'); //Cache this for performance

            var setBodyScale = function() {
                var scaleSource = $body.width(),
                    scaleFactor = 0.1,                     
                    maxScale = 300,
                    minScale = 10; //Tweak these values to taste

                var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

                if (fontSize > maxScale) fontSize = maxScale;
                if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

                // $('body').css('font-size', fontSize + '%');
            }

            $(window).resize(function(){
                setBodyScale();
            });

            //Fire it when the page first loads:
            setBodyScale();

    $("#results").hide();
    $(".alert").hide();

    function calculateSalary(hourlyRate, hoursWorked, allowanceClaimed, maritalStatus){
        
        let overtimeHours = (hoursWorked - 40);
        let overTimePay = (overtimeHours*hourlyRate*1.5);
        let weeklyFTPay = (hourlyRate*40);
        let weeklyPay = (weeklyFTPay + overTimePay);
        let totalAllowance = (allowanceClaimed*79.8).toFixed(2);
        let amtSubjectToWithholding = (weeklyPay - totalAllowance).toFixed(2);
        let biWeeklyPay = (weeklyPay*2).toFixed(2);
        let monthlyPay = (weeklyFTPay*4).toFixed(2);
        let annualPay = (weeklyFTPay*52).toFixed(2);
        let weeklyWithheldTax = 0;
        console.log(maritalStatus, "with " , allowanceClaimed, "Allowance Claimed");
       
        
if ( maritalStatus === "single" ){

    // Choose Tax Brackets based on Weekly Pay to calculate Taxes for Singles
    if ( amtSubjectToWithholding > 71 && amtSubjectToWithholding < 254 ){
        let taxableIncome = (amtSubjectToWithholding - 71);
            weeklyWithheldTax = taxableIncome*0.1;
    } else if ( amtSubjectToWithholding > 254  && amtSubjectToWithholding < 815 ){
        let taxableIncome = (amtSubjectToWithholding - 254);
            weeklyWithheldTax = (taxableIncome*0.12) + 18.30;
    } else if ( amtSubjectToWithholding > 815  && amtSubjectToWithholding < 1658 ){
        let taxableIncome = (amtSubjectToWithholding - 815);
            weeklyWithheldTax = (taxableIncome*0.22) + 85.62;
    } else if ( amtSubjectToWithholding > 1658  && amtSubjectToWithholding < 3100 ){
        let taxableIncome = (amtSubjectToWithholding - 1658);
            weeklyWithheldTax = (taxableIncome*0.24) + 271.08;
    } else if ( amtSubjectToWithholding > 3100  && amtSubjectToWithholding < 3917 ){
        let taxableIncome = (amtSubjectToWithholding - 3100);
            weeklyWithheldTax = (taxableIncome*0.32) + 617.16;
    }  else if ( amtSubjectToWithholding > 3917  && amtSubjectToWithholding < 9687 ){
        let taxableIncome = (amtSubjectToWithholding - 3917);
            weeklyWithheldTax = (taxableIncome*0.35) + 878.6;
    } else if ( amtSubjectToWithholding > 9687 ){
        let taxableIncome = (amtSubjectToWithholding - 9687);
            weeklyWithheldTax = (taxableIncome*0.37) + 2898.10;
    } else {
            weeklyWithheldTax = 0;
    }

} else if ( maritalStatus === "married") { 

    // Choose Tax Brackets based on Weekly Pay to calculate Taxes for Married
    if ( amtSubjectToWithholding > 222 && amtSubjectToWithholding < 588 ){
        let taxableIncome = (amtSubjectToWithholding - 222);
            weeklyWithheldTax = (taxableIncome*0.1);
    } else if ( amtSubjectToWithholding > 588  && amtSubjectToWithholding < 1711 ){
        let taxableIncome = (amtSubjectToWithholding - 588);
            weeklyWithheldTax = (taxableIncome*0.12) + 36.60;
    } else if ( amtSubjectToWithholding > 1711  && amtSubjectToWithholding < 3395 ){
        let taxableIncome = (amtSubjectToWithholding - 1711);
            weeklyWithheldTax = (taxableIncome*0.22) + 171.36;
    } else if ( amtSubjectToWithholding > 3395  && amtSubjectToWithholding < 6280 ){
        let taxableIncome = (amtSubjectToWithholding - 3395);
            weeklyWithheldTax = (taxableIncome*0.24) + 541.84;
    } else if ( amtSubjectToWithholding > 6280  && amtSubjectToWithholding < 7914 ){
        let taxableIncome = (amtSubjectToWithholding - 6280);
            weeklyWithheldTax = (taxableIncome*0.32) + 1234.24;
    } else if ( amtSubjectToWithholding > 7914  && amtSubjectToWithholding < 11761 ){
        let taxableIncome = (amtSubjectToWithholding - 7914);
            weeklyWithheldTax = (taxableIncome*0.35) + 1757.12;
    } else if ( amtSubjectToWithholding > 11761 ) {
        let taxableIncome = (amtSubjectToWithholding - 11761);
            weeklyWithheldTax = (taxableIncome*0.37) + 3103.57;
    } else { weeklyWithheldTax = 0; }
    
}
    // console.log(weeklyWithheldTax);
    let weeklyPayAfterTax = (weeklyPay - weeklyWithheldTax).toFixed(2);
    let biWeeklyPayAfterTax = (weeklyPayAfterTax*2).toFixed(2);
    let monthlyPayAfterTax = (biWeeklyPayAfterTax*2).toFixed(2);
    let annualPayAfterTax = (monthlyPayAfterTax*12).toFixed(2);
    let biWeeklyTax = (weeklyWithheldTax*2).toFixed(2);
    let monthlyTax = (biWeeklyTax*2).toFixed(2);
    let annualTax = (monthlyTax*12).toFixed(2);
    let workStatus = "Full Time";

    console.log(weeklyWithheldTax, "wwt");
    // set work status in report
    if (hoursWorked < 40){  workStatus = "Part Time" }

    // Render result to web page
    $("#results").html(`
        If you earn $${hourlyRate}/hour and you work ${workStatus} (${hoursWorked} hours),<br> 
        Bi-Weekly Gross Pay: $${biWeeklyPay}, <br>
        Monthly Gross Pay: $${monthlyPay}, <br>  
        You'll get approximately $${biWeeklyPayAfterTax} every 2 weeks <br> 
        Annual Pay: $${annualPay}<br>
        Annual Pay After Tax: $${annualPayAfterTax}.
        `);
    }

    // End of function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // Add listener to calculate button to calculate and render results
    $("#magic").on("click", function(){

        // Save input values in variables
        let hoursWorked = $("#hoursWorked").val();
        let hourlyRate = $("#hourlyRate").val();
        let allowanceClaimed = $('#allowanceClaimed').val();
        let maritalStatus = $('input[name="maritalStatus"]:checked').val();
        let deduction = $('.deduction').val();

        
// Form Validation
        if (hourlyRate === ""){
            $("#hourlyRate").toggleClass("animated shake");
        }  else if (hoursWorked === ""){
            $("#hoursWorked").toggleClass("animated shake");
        }  else if (allowanceClaimed === ""){
            $("#allowanceClaimed").toggleClass("animated shake");
        }  else if ( maritalStatus === undefined ){
            $(".alert").show();
        }  else 
        
        {
            $(".alert").hide();
            $("#results").show();

            // Call function to calculate income
            calculateSalary(hourlyRate, hoursWorked, allowanceClaimed, maritalStatus);
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
    
// 7%, 4% and 8.4%