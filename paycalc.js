$(document).ready(function(){

console.log("System Online");

$("#results").hide();
$(".alert").hide();

let PayCalc = { 
    salary: function(){
        let hoursWorked = $("#hoursWorked").val();
        let hourlyRate = $("#hourlyRate").val();
        console.log(hourlyRate, hoursWorked);
        
        // Render result to web page
        $("#results").html(`
       $${hourlyRate}/hour and you work (${hoursWorked} hours),<br>
        `);

    },
    validate: function(){
        if (hourlyRate === ""){
            $("#hourlyRate").toggleClass("animated shake");
        }  else if (hoursWorked === ""){
            $("#hoursWorked").toggleClass("animated shake");
        }  else if (allowanceClaimed === ""){
            $("#allowanceClaimed").toggleClass("animated shake");
        }  else if ( maritalStatus = undefined ){
            $(".alert").show();
        }  else 
        
        { return }
    }
};

$("#magic").on("click", function(){

    $("#results").show();
    PayCalc.salary();

    });

    // Clear form fields
    $("#hoursWorked").val("");
    $("#hourlyRate").val("");
    $('#allowanceClaimed').val("");
    $('.deduction').val("");

});