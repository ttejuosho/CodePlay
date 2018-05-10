// function Car (make, model, year, mileage, price){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.mileage = mileage;
//     this.price = function(mileage,year){
//        return "$"+ (this.mileage/this.year).toFixed(2);
//     }
// }

// const blue = new Car ("Chrysler", "Sebring", 2008, 200010);
// const red = new Car("Toyota", "Solara", 2001, 340871);
// const budruk = new Car("Infiniti", "QX45", 2010, 120348);
// const shadow = Object.create(blue);

// shadow.model = "Maserati";
// shadow.make = "Fiat Chrysler";
// shadow.year = 2017;
// shadow.mileage = 20458;


// var myCars = [blue, red, budruk, shadow];

// function lister (arr){
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i].make === "Toyota"){
//             arr[i].make === "Taiwo"
//         }
//         console.log(     
//             "Make: " + arr[i].make,
//             "\nModel: " + arr[i].model, 
//             "\nYear: " + arr[i].year, 
//             "\nMileage: " + arr[i].mileage,
//             "\nPrice: " + arr[i].price(),
//             "\n++++++++++++++++++++++++++++++++++\n"
//     );
//     }
    
// }

// // console.log(shadow);
// lister(myCars);

// var timeInput = new Date().getTime();

// function timeConverter(timeInput){
//     var timeInput = new Date(timeInput);
//     // console.log(timeInput.toString().slice(0,24));
//     console.log(timeInput.toString().slice(0,10), 
//                 timeInput.toString().slice(16,24),
//                 timeInput.toString().slice(11,16)
//                 );
// }

// timeConverter(1524992455434);
var XMLHttpRequest = require("xhr2");


var queryURL = "http://it-recruitment.mintel.com/testing/test_data.json";
var my_JSON_object;
var http_request = new XMLHttpRequest();
http_request.open("GET", queryURL, true);
http_request.responseType = "json";
http_request.onreadystatechange = function () {
  var done = 4, ok = 200;
  if (http_request.readyState === done && http_request.status === ok) {
    my_JSON_object = http_request.response;

// Answer 8
    // var unique = 0;
    // for (var i=0; i < my_JSON_object.length - 1; i++){
    //     var currentStatus = my_JSON_object[i].status;
    //     var nextStatus = my_JSON_object[i+1].status;
     
    //     if ( nextStatus != currentStatus ){
    //         unique++;
    //     }
        
    // }
    // console.log("Number of Statuses: " + i);
    // console.log("Number of Statuses: " + unique);

// Answer 9
    var userIdArray = [];
    for (var i=0; i < my_JSON_object.length; i++){
        var currentUser = my_JSON_object[i].status;
        userIdArray.push(currentUser);
    }

    result = {};
    for(var i = 0; i < userIdArray.length; ++i) {
        if(!result[userIdArray[i]])
            result[userIdArray[i]] = 0;
        ++result[userIdArray[i]];       
    }
    console.log(result);

// Answer 10
    
    // var totalTimeSpent = 0;
    // var counter8951 = 0;
    // var negativeTimeSpent = 0;
    // for (var i=0; i < my_JSON_object.length - 1; i++){      
    //     if ( my_JSON_object[i].status === 8951 ){
    //         counter8951++;
    //        var timeSpent = my_JSON_object[i].end_time - my_JSON_object[i].start_time;
    //         if (timeSpent < 0){
    //             negativeTimeSpent++;
    //         } else 
    //         {           
    //         var temp = timeSpent;
    //         totalTimeSpent = totalTimeSpent + temp ;           
    //             }
    //     }
    // } 
    // var averageTimeSpent = (totalTimeSpent/counter8951).toFixed(2);
    // console.log("Total Time Spent on Status 8951: " + totalTimeSpent);
    // console.log("Number of 8951_Statuses: " + counter8951);
    // console.log("Average time spent on Status 8951 is: " + averageTimeSpent);
    // console.log(negativeTimeSpent + " time differences were negative so i didnt add them");

//  Answer 11
// var statusCounter = 0;
// var arr3 = [];
// var foundAtLeastTwice = 0;
// for (var i = 0; i < my_JSON_object.length - 1; i++){
//     var currentStatus = my_JSON_object[i].status;
//     var lastNumber = currentStatus.toString().split('').pop();
//     if (lastNumber === "3"){
//         statusCounter++;
//         arr3.push(currentStatus);
//     }
//     }

// console.log(statusCounter);
// console.log(arr3);

// for (var j = 0; j < arr3.length; j++){
//     if (arr3[j + 1] === arr3[j])
//     console.log(arr3[j] + " occurred at least twice");
//     foundAtLeastTwice++;
// }

// function calcPercentInErrorStatus(arg){
//     console.log(arg/18801) * 100 + "%";
// }

// calcPercentInErrorStatus(foundAtLeastTwice);



// Answer 12
// for (var i = 0; i < my_JSON_object.length - 1; i++){
//     // var currentUserId = my_JSON_object[i].user_id;
//     var currentStatus = my_JSON_object[i].status;
//     var nextStatus = my_JSON_object[i+1].status;
//     if (currentStatus === nextStatus){

//     }
    
// }

  }
};
http_request.send(null);