var arr=[1,2,3,4,6,8,9,10,15,16,17,18];
var count = 0
findCon(arr);


function findCon(arr){

    for (var i=0; i < arr.length; i++){
        
        while (arr[i] + 1 === arr[i+1]){
            var min = arr[i];
            var max = arr[i+1];
        
        if (temp - min > 0 ){
            var newMin = temp;
        } else {
            var newMin = min;
        }
        console.log(min);
        console.log(newMin + "-" + max);
    }
    }
}

