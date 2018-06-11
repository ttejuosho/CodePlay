$(document).ready(function(){
    console.log("SYSTEM READY");
    $("#results").hide();
    function calculateSalary(hourlyRate, hoursWorked){
        let overtimeHours = (hoursWorked - 40);
        let overTimePay = (overtimeHours*hourlyRate*1.5);
        let weeklyFTPay = (hourlyRate*40);
        let weeklyPay = (weeklyFTPay + overTimePay);
        let biWeeklyPay = (weeklyPay*2).toFixed(2);
        let monthlyPay = (biWeeklyPay*2).toFixed(2);
        let annualPay = (weeklyFTPay*52).toFixed(2);
        let taxRate = 0;


        
    // Choose Tax Brackets based on Annual Pay to calculate Taxes
    if (annualPay < 9325){
        taxRate = 0.1;
    } else if (annualPay > 9325 && annualPay < 37950){
        taxRate = 0.15;
    } else if (annualPay > 37950 && annualPay < 91900){
        taxRate = 0.25;
    } else if (annualPay > 91900 && annualPay < 191650){
        taxRate = 0.28;
    } else if (annualPay > 191650 && annualPay < 416700){
        taxRate = 0.33;
    }  else if (annualPay > 416700 && annualPay < 418400){
        taxRate = 0.35;
    } else {
        taxRate = 0.396;
    }

    let annualTax = (taxRate*annualPay).toFixed(2);
    let biWeeklyTax = (biWeeklyPay*taxRate).toFixed(2);
    let annualPayAfterTax = (annualPay - annualTax).toFixed(2);
    let biWeeklyPayAfterTax = (biWeeklyPay - biWeeklyTax).toFixed(2); 
    let taxRatePercent = (taxRate*100).toFixed(2);


    if (hoursWorked >= 40){
        $("#results").html(`
            If you earn $${hourlyRate}/hour and you work Full Time,<br> 
            Bi-weekly pay: $${biWeeklyPay}, <br>  
            At a tax rate of ${taxRatePercent}%, <br> 
            You'll get approximately $${biWeeklyPayAfterTax} every 2 weeks <br> 
            Annual Pay: $${annualPay}<br>
            And you'll get $${annualPayAfterTax} yearly after tax.
            `);
    }
    if (hoursWorked < 40){
        $("#results").html(`
            If you earn $${hourlyRate}/hour and you work Part Time,<br> 
            Bi-weekly pay: $${biWeeklyPay}, <br>  
            At a tax rate of ${taxRatePercent}%, <br> 
            You'll get approximately $${biWeeklyPayAfterTax} every 2 weeks <br> 
            Annual Pay: $${annualPay}<br>
            And you'll get $${annualPayAfterTax} yearly after tax.
                    `);
        }


    }


$("#magic").on("click", function(){
    $("#results").show();
    // Save input values in variables
    let hoursWorked = $("#hoursWorked").val();
    let hourlyRate = $("#hourlyRate").val();

    // Call function to calculate income
    calculateSalary(hourlyRate, hoursWorked);

    // Clear form fields
    $("#hoursWorked").val("");
    $("#hourlyRate").val("");

});




});
    
