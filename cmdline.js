var arg1 = process.argv[2];
var arg2 = process.argv[3];
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

//printFibonacciSeries(7);

// if (isInteger(arg1)){
    //console.log(buildString(arg1));
//     printFibonacciSeries(arg1);
// } else {
//     console.log("Invalid Argument Passed");
// }
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// var xhr = new XMLHttpRequest();
// xhr.timeout = 5000;
// xhr.onreadystatechange = function(e){
// console.log(this);
// if (xhr.readyState === 4){
//     if (xhr.status === 200){
//     //$("#result").html(xhr.response);
//     console.log(xhr.response);
//     } else {
//     console.error("XHR didn't work: ", xhr.status);}
//     }
// }
// xhr.ontimeout = function (){
// console.error("request timedout: ", xhr);
// }
// xhr.open("get", "https://auctiondata.iaai.com/Search?AccessKey=faa3f7d8-932e-42bf-9a61-2b2cf379ad75", /*async*/ true);
// xhr.send();

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function getProfit(arg1){
    var fixedCost = 250000000;
    var volumePurchased = 30000000 - (90000 * arg1);
    var totalAmountMadeFromFactoryAB = volumePurchased * arg1;
    
    var factoryAProduced = volumePurchased * 0.6;
    var factoryBProduced = volumePurchased * 0.4;

    var factoryAProductionCost = 190 * factoryAProduced;
    var factoryBProductionCost = 250 * factoryBProduced;

    var totalProductionCost = factoryAProductionCost + factoryBProductionCost + fixedCost;
    var profit = totalAmountMadeFromFactoryAB - totalProductionCost;
    var percentProfit = ((totalAmountMadeFromFactoryAB - totalProductionCost)/totalAmountMadeFromFactoryAB) * 100;

if(arg2 === "info"){
    console.log("\n");
    console.log("======================================");
    console.log("Detailed Information @ Price = $" + arg1);
    console.log("====================================== \n");

    console.log("Total Volume Purchased: ", formatNumber(volumePurchased), "Units");
    console.log("Total Amount made from Factory A & B: $" + formatNumber(totalAmountMadeFromFactoryAB), " \n");

    console.log("Total Number of Units Produced at Factory A: ", formatNumber(factoryAProduced) , "Units");
    console.log("Total Number of Units Produced at Factory B: ", formatNumber(factoryBProduced) , "Units \n");

    console.log("Factory A Production Cost: $" + formatNumber(factoryAProductionCost));
    console.log("Factory B Production Cost: $" + formatNumber(factoryBProductionCost));
    console.log("Total Production Cost: $" + formatNumber(totalProductionCost));
}
    console.log("\n");
    console.log("Profit: $" + formatNumber(profit));

    console.log("Percentage Profit: ", percentProfit.toFixed(2), "% \n");

}

getProfit(arg1);