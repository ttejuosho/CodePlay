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

if (isInteger(arg1)){
    console.log(buildString(arg1));
} else {
    console.log("Invalid Argument Passed");
}
