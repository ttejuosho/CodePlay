var arg1 = process.argv[2];
arg1 = parseFloat(arg1);

function isInteger(argNum){
    return Number.isInteger(argNum);
}

function buildString(arg1){
    var str = "";
    for (var index = 1; index < arg1 + 1; index++){
        if (index == arg1){
            str += "Number" + " " + index + ".";
        } else {
            str += "Number" + " " + index + ", ";
        }
    }
    return str;
}

function printFibonacciSeries(arg1){
    var series = [];
    for (var i = 0; i < arg1; i++){
        if (i <= 1){
            series.push(1);
        } else {
            series.push(series[series.length - 1] + series[series.length - 2]);
        }
    }
    console.log("First " + arg1 + " terms in the Fibonacci Series are : ");
    console.log(series.toString() + ".");
}


function getNextTerm(seriesArray){
    return seriesArray[seriesArray.length - 1] + seriesArray[seriesArray.length - 2];
}


// if (isInteger(arg1)){
    //console.log(buildString(arg1));
//     printFibonacciSeries(arg1);
// } else {
//     console.log("Invalid Argument Passed");
// }
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

var xhr = new XMLHttpRequest();
xhr.timeout = 5000;
xhr.onreadystatechange = function(e){
console.log(this);
if (xhr.readyState === 4){
    if (xhr.status === 200){
    //$("#result").html(xhr.response);
    console.log(xhr.response);
    } else {
    console.error("XHR didn't work: ", xhr.status);}
    }
}
xhr.ontimeout = function (){
console.error("request timedout: ", xhr);
}
xhr.open("get", "https://auctiondata.iaai.com/Search?AccessKey=faa3f7d8-932e-42bf-9a61-2b2cf379ad75", /*async*/ true);
xhr.send();