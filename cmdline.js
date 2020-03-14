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

function printFibonacci(arg1){
    var output = [];
    var series = "";
    for (var i = 0; i < arg1; i++){
        if (i <= 1){
            output.push(1);
            series += 1 + ", ";
        } else {
            output.push(output[output.length - 1] + output[output.length - 2]);
            if (i == arg1 - 1){
                series += (output[i - 1]) + (output[i - 2]) + ". ";
            } else {
                series += (output[i - 1]) + (output[i - 2]) + ", ";
            }
        }
    }
    //console.log(output);
    console.log(series);
}

if (isInteger(arg1)){
    //console.log(buildString(arg1));
    printFibonacci(arg1)
} else {
    console.log("Invalid Argument Passed");
}
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55