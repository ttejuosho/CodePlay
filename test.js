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
// var XMLHttpRequest = require("xhr2");


// var queryURL = "http://it-recruitment.mintel.com/testing/test_data.json";
// var my_JSON_object;
// var http_request = new XMLHttpRequest();
// http_request.open("GET", queryURL, true);
// http_request.responseType = "json";
// http_request.onreadystatechange = function () {
//   var done = 4, ok = 200;
//   if (http_request.readyState === done && http_request.status === ok) {
//     my_JSON_object = http_request.response;

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
    // var userIdArray = [];
    // for (var i=0; i < my_JSON_object.length; i++){
    //     var currentUser = my_JSON_object[i].status;
    //     userIdArray.push(currentUser);
    // }

    // result = {};
    // for(var i = 0; i < userIdArray.length; ++i) {
    //     if(!result[userIdArray[i]])
    //         result[userIdArray[i]] = 0;
    //     ++result[userIdArray[i]];       
    // }
    // console.log(result);

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

//   }
// };
// http_request.send(null);

// function counter(){
//     for (var i = 0; i <= 100; i++){
//         if (i%3 === 0 && i%5 === 0){
//             console.log("Go");
//         } else if (i%5 === 0){
//             console.log("Taiwo");
//         } else if(i%3 === 0){
//             console.log("Go Taiwo");
//         } else {console.log(i)}
//     }
// }

// counter();

// function getRandom()
// {
//     tdy = new Date();
//     var bigN=tdy.getSeconds()*tdy.getTime();
//     bigN *= Math.sqrt(tdy.getMinutes());
//     var randN = (bigN % 4) + 1;
//     console.log( Math.floor(randN));
// }

// getRandom();

// var x = 3;
// var y = 0;

// function testY() {
//     y++;
//     console.log("true");
// }

// if (x>=3 && testY()) { y++; }
// if (x<3 || testY()) { y++; }
// if (x<3 && testY()) { y++; }
// if (x>=3 || testY()) { y++; }

// var z = y;
// console.log(z);

// Add all elements in an Array


// let total = 0;
// function adder(arr){
//     for( let i = 0; i < arr.length; i++){
//         total = total + arr[i];
//     }
//     console.log(total);
// }

// adder(arr0);

// let aPoints = 0;
// let bPoints = 0;
// let equal = 0;

// // This function compares elements in 2 arrays and increases 2 var for each Array
// function compareElementsInArray (arr0,arr1){
//    for(let i = 0; i < arr0.length; i++){
//         if (arr0[i] < arr1[i]){
//             aPoints++ ;
//         } else if (arr0[i] > arr1[i]){
//             bPoints++ ;
//         } else {
//             equal++ ;
//         }
//    }
//    console.log(aPoints, bPoints, equal);
// }

// compareElementsInArray (arr0,arr1);

let arr = [];
let arr0 = [31,36,83,49,73,20,91,18,65,60,78,40,68];
let arr1 = [73,19,34,25,81,45,92,58,22,76,37,67,48];
let arr2 = [49,73,20,34,33,45,93,58,47,63,78,74,91];
let arr3 = ['Cabbage', 'Turnip', 'Quince', 'Pineapples', 'Mango', 'Radish', 'Lemon', 'Carrot', 'Peach', 'Watermelon'];
let arr4 = ['cabbage', 'Banana', 'Olive', 'Prune', 'Turnip', 'Mango', 'Radish', 'Avocado', 'Apple', 'Carrot', 'Kiwifruit'];
let arrX = arr1.map( x => x * 5);
let arrY = arr4.map( x => x.toUpperCase());

let Big = {
    this:aPoints = 0,
    this:bPoints = 0,
    this:equal = 0,
    this:unequal = 0,
    this:total = 0,
    this:percentMatch = 0,
    this:iterationCounter = 0,
    this:hoursWorked = 0,
    this:hourlyRate = 0,
    this:overtimeHours = (hoursWorked - 40),
    this:overTimePay = overtimeHours*hourlyRate*1.5,
    this:weeklyFTPay = hourlyRate*40,
    this:weeklyPay = weeklyFTPay + overTimePay,
    adder: function (arr){
        for( let i = 0; i < arr.length; i++){
            total = total + arr[i];
        }
        console.log(total);
    },
    compareElementsInArray : function (arr0,arr1){
        for(let i = 0; i < arr0.length; i++){
             if (arr0[i] < arr1[i]){
                 aPoints++ ;
             } else if (arr0[i] > arr1[i]){
                 bPoints++ ;
             } else {
                 equal++ ;
             }
        }
        console.log(aPoints, bPoints, equal);
     },
     matchElementsInArray : function (arr0,arr1){
        for(let i = 0; i < arr0.length; i++){
            for (let j = 0; j < arr1.length; j++){
                if (arr0[i] === arr1[j]){
                    equal++ ;
                 } else {
                     unequal++ ;
                 }
            } 
        }
        percentMatch = ((equal/arr1.length)*100).toFixed(1);
        console.log(equal + " elements found", percentMatch +"% Match");
     },
     goTaiwo: function(){
        for (var i = 1; i <= 100; i++){
            if (i%3 === 0 && i%5 === 0){
                arr.push("Go");
                console.log("Go");
            } else if (i%5 === 0){
                arr.push("Taiwo");
            } else if(i%3 === 0){
                arr.push("Go Taiwo");
            } else { arr.push(i) }
        }
        console.log(arr);
    },
    findMinMax: function(arr0){
        let min = arr0[0];
        let max = arr0[0];
        for(let i = 0; i < arr0.length; i++){
            if (arr0[i] < min){
                min = arr0[i];
            }  else if (arr0[i] > max){
                max = arr0[i];
            }
        }
        console.log(min, max);
    },
    calculateSalary: function(hourlyRate,hoursWorked){
        
        let overtimeHours = (hoursWorked - 40);
        let overTimePay = overtimeHours*hourlyRate*1.5;
        let weeklyFTPay = hourlyRate*40;
        let weeklyPay = weeklyFTPay + overTimePay;
           
        let biWeeklyPay = (weeklyPay*2).toFixed(2);
        let monthlyPay = (biWeeklyPay*2).toFixed(2);
        let annualPay = (weeklyFTPay*52).toFixed(2);

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
            console.log(`
    If you earn $${hourlyRate}/hour and you work Full Time,
    Bi-weekly pay: $${biWeeklyPay}, annual Pay: $${annualPay}
    At a tax rate of ${taxRatePercent}%, 
    youll get approximately $${biWeeklyPayAfterTax} every 2 weeks 
    and youll make $${annualPayAfterTax} yearly.
                `);
        }
        if (hoursWorked < 40){
            console.log(`
    If you earn $${hourlyRate}/hour and you work Part Time,
    Bi-weekly pay: $${biWeeklyPay}, annual Pay: $${annualPay}
    At a tax rate of ${taxRatePercent}%, 
    youll get approximately $${biWeeklyPayAfterTax} every 2 weeks 
    and youll make $${annualPayAfterTax} yearly.
                `);
            }
    }
}


// Big.compareElementsInArray(arr2,arr1);
// Big.adder(arr2);
// Big.matchElementsInArray(arr3,arr4);
// Big.goTaiwo();
// Big.findMinMax(arr0);
Big.calculateSalary(21.83,42);
