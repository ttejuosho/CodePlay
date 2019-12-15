function Car (make, model, year, mileage, price){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.price = function(mileage,year){
       return "$"+ (this.mileage/this.year).toFixed(2);
    }
}

const blue = new Car ("Chrysler", "Sebring", 2008, 200010);
const red = new Car("Toyota", "Solara", 2001, 340871);
const budruk = new Car("Infiniti", "QX45", 2010, 120348);
const shadow = Object.create(blue);

shadow.model = "Maserati";
shadow.make = "Fiat Chrysler";
shadow.year = 2017;
shadow.mileage = 20458;


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
    this:taxRate = 0,
    this:overtimeHours = (hoursWorked - 40),
    this:overTimePay = overtimeHours*hourlyRate*1.5,
    this:weeklyFTPay = hourlyRate*40,
    this:weeklyPay = weeklyFTPay + overTimePay,
    this:overtimeHours = (hoursWorked - 40),
    this:overTimePay = overtimeHours*hourlyRate*1.5,
    this:weeklyFTPay = hourlyRate*40,
    this:weeklyPay = weeklyFTPay + overTimePay,
    this:biWeeklyPay = (weeklyPay*2).toFixed(2),
    this:monthlyPay = (biWeeklyPay*2).toFixed(2),
    this:annualPay = (weeklyFTPay*52).toFixed(2),
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
    }
}


// Big.compareElementsInArray(arr2,arr1);
// Big.adder(arr2);
// Big.matchElementsInArray(arr3,arr4);
// Big.goTaiwo();
// Big.findMinMax(arr0);
// Big.calculateSalary(21.83,42);
var ct = 0;

let aliyahFunction = () => {
    for (let element of arr0){
      ct += element;
    }
    console.log(ct);
}

// aliyahFunction();

var toyota = new Map();
toyota.set('Camry', '$23,500');
toyota.set('Corolla', '$31,250');
toyota.set('Highlander', '$35,000');
toyota.set('Avalon', '$18,950');
toyota.set('Rav-4', '$36,450');

// console.log(toyota.get('Rav-4'));

// for (let [key, value] of toyota){
//     console.log(key, " costs ", value);
// }
function Person(firstName, lastName, job) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;

    // a method which returns the full name
    this.fullName = function() {
        return this.firstName + " " + this.lastName + " is a " + this.job;
    }
}

var myPerson = new Person("Taiwo", "Tejuosho", "Software Engineer");
// console.log(myPerson.fullName()); 

var hobby = function () {
    console.log(this.firstName); 
}

// hobby.call(myPerson);


let arr5 = [31,36,83,49,49,73,60,40,73,20,91,18,65,60,78,40,68];
let newArr = [];

function simplify (intArray){
for ( var i = 0; i < 17; i++){
    var lowest = Math.min(...intArray);
    newArr.push(lowest);
    var index = intArray.indexOf(lowest);
    if (index > -1) {
      intArray.splice(index, 1);
    }
}

// remove duplicates in newArray to get result Array
var resultArray = newArr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

console.log(resultArray);
}

// simplify(arr5);

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

// askMom();


let calculateArea = (shape, values) => {
    //     set restrictions for values
        var getShapeAndSides = new Promise ( 
           function(resolve, reject) {  
        if (shape.length >= 1 && shape.length <= 2000){
                shapes = shape[i];
                values_arr = values[i];
            resolve(shapes, values_arr);
        } else {
            var reason = new Error ('Invalid Input');
            reject(reason);
        }
    })
}
    
    // Complete the generateArea function below.
    // It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
    let getAreas = (shapes, values_arr) => {
        calculateArea.then(function (fulfilled){
            return Area;
        }).catch(function (error){
            return -1;
        });
    }

var arrt = "this is a good guy";
function WordCount(str) { 
    return str.split(" ").length;
}


function wordSplit(str){
    var splitArray = str.split(" ");
    console.log(splitArray);
    for (var i = 0; i < splitArray.length; i++){
        console.log(splitArray[i]);
    }
}


// console.log(WordCount(arrt));
// wordSplit(arrt);

const arrayToMapOver = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
function timesFive(value) { 
    return value * 5 
} 
//const newArray = arrayToMapOver.map(timesFive);

//console.log(arrayToMapOver);

function ourMap(transformation, inputArray) {
    // bind an empty array to a variable to hold our transformed 
    // values 
    let outputArray = []; 
    
    // loop over the input array 
    for (let value of inputArray) {
        // apply our transformation here 
        let transformedValue = transformation(value) 
        // put the transformed value in our outputArray
        outputArray.push(transformedValue) 
    } 
    return outputArray 
};

const newArray = ourMap(timesFive, arrayToMapOver);
//console.log(newArray);

var h = "234434664";
var n = 0;
for (var i = 0; i < h.length; i++){
    if (h[i] === h[i+1]){
        n++;
    }
}


function findNearest(){
    var rArray = [];
    var allLocations = [[1,2],[2,3],[4,5]];
    var nearest = 0;
    var farthest = 0;

    for (var i = 0; i < allLocations.length; i++){
        var temp = Math.sqrt(Math.pow(allLocations[i][0], 2) + Math.pow(allLocations[i][1], 2));
        console.log(temp);
        rArray.push(temp);
    }

}

function fizzBuzz(fizzNum){
    if (fizzNum % 3 == 0 && fizzNum % 5 == 0){
        console.log("FizzBuzz");
        //return "Fizz";
    } else if (fizzNum % 5 == 0){
        console.log("Buzz");
        //return "Buzz";
    } else if (fizzNum % 3 == 0){
        console.log("Fizz");
        //return "FizzBuzz";
    } else {
        console.log("FALSE");
        //return false;
    }
}

function priceCalculator(item, qty){
    
}