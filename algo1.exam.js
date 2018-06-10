// Instructions
// Exam Time: 6 hours

// * * * * * * * * * * * * * *
// * * * Exam Guidelines * * * 
// * * * * * * * * * * * * * *

// Do not change the given function names.
// Do not comment out the given functions.
// Do not change the given function parameters.
// Do not submit broken code (comment out broken code, do not comment out the given function, leave it empty)
// Make sure you are returning the expected data type.
// Remove all console.logs statements before submitting.


// ========================================================================================
// Please enter your information
user = {
    first_name: "Taiwo",
    last_name: "Tejuosho",
    email: "ttejuosho@aol.com",
    mac_operating_systems: ["Maverick", "Yosemite", "EL Capitan", "Sierra", "High Sierra"],
    devSkills: "HTML, CSS, JavaScript, JQuery, Handle Bars, Python, MySQL, PostgreSQL, MongoDB, React Js, Meteor Js, React Native, .NET, C#, C++, C, Java, J2EE, Node Js, Angular 2, Angular 4, Bootstrap, Materialize, SQL Server, LESS, SASS, Microsoft Azure, Amazon Web Services, TypeScript, Ruby, Rails, Maven, Jenkins,Spring MVC, Microservices, ASP.NET, Kotlin, Android Studio, Docker, Git, Redux, DevOps, Salesforce, Wordpress, Cold Fusion, Vue Js, Ember Js",
    myDevSkills: "HTML, CSS, JavaScript, JQuery, Handle Bars, MySQL, MongoDB, Bootstrap, Materialize, Node Js, Android Studio, Java, Git, React Js"
};

let myPoints = 0;
let skillsArray = user.devSkills.toLowerCase().split(", ");
let mySkillsArray = user.myDevSkills.toLowerCase().split(", ");

function devSkillsArray(arr0, arr1){
    for (var i = 0; i < arr0.length; i++){
        for (var j = 0; j < arr1.length; j++){
            if (arr1[j] === arr0[i]){
                myPoints++;
            }
        }
    }
    console.log(myPoints + " skills found");
    console.log("You have "+ ((myPoints/skillsArray.length)*100).toFixed(2) + "%" + " of the skills needed for this job.");
}

devSkillsArray(skillsArray, mySkillsArray);

// ========================================================================================
// Given a string (str), return the string in reverse.
function reverseString(str) {
    let reversedArray = [];
    let splitted = str.split("");
    for (var i = splitted.length; i--; i >=0 ){
        reversedArray.push(splitted[i]);
    }  
    console.log(reversedArray.join(""));
}

// reverseString(user.last_name);

// ========================================================================================
// Given a string (str) and a character (char), return a string without the supplied character (char).
function removeLetter(str, char) {
    let reversedArray = [];
    let splitted = str.split("");
    for (var i = splitted.length; i--; i >=0 ){
        if (splitted[i] != char){
            reversedArray.push(splitted[i]);   
    }  
}
    console.log(reversedArray.join(""));
}
// removeLetter(user.last_name, "e");
// ========================================================================================
// Return the factorial of a number (num)
// Given: 0 Return 1 || Given: 1 Return 1 || Given: 2 Return 2
// Given: 3 Return 6 || Given: 4 Return 24 || Given: 5 Return 120 
function factorial(num) {
    let facto = 1;
    for (var i = 1; i <= num; i++){
        facto = i * facto;
    }
    console.log(facto);
}

// factorial(20);

// ========================================================================================
// Given a string, returns whether the sequence of various brackets within it are valid. For example:
// Given: "[] [] [ [] [] ]" or "[]" Return: true
// Given: "[][]]" or "[][[[]]" Return: false
function isBracketValid(str) {
    
}


// ========================================================================================
// Given a string, return a boolean whether the string is a strict palindrome.
// Given "a x a" or "racecar" Return: true
// Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false. 
function isPalindromeStrict(str) {

}

// ========================================================================================
// Given an array (arr), index (idx), and additional value (val), insert the value into the array at the given index. Do this without using built-in array methods. Return the modified or new array.
function insertAt(arr, idx, val) {
    var nuArray = [];
    for (var i = 0; i < arr.length; i++){
        if (i === idx){
            nuArray.push(val);
        }
        nuArray.push(arr[i]);
    } 
    console.log(nuArray);
}

// insertAt(user.mac_operating_systems,2,"Baba");

// ========================================================================================
// Given an array (arr) and additional value (val), insert the value into the array at a randomly generated index. Do this without using built-in array methods. Return the modified or new array.

function insertAtRandomIndex(arr, val) {
    var arrLength = arr.length;
    var idx = Math.floor(Math.random() * arrLength);
    console.log("val will be inserted at index ", idx);
    var nuArray = [];
    for (var i = 0; i < arr.length; i++){
        if (i === idx){
            nuArray.push(val);
        }
        nuArray.push(arr[i]);
    } 
    console.log(nuArray);
}

// insertAtRandomIndex(user.mac_operating_systems,"BabaOS");
// ========================================================================================
// Given an array (arr) and an index (idx), remove the value from the array, this should shorten the length of the array. Do this without using any built-in array methods except pop().
function removeAt(arr, idx) {
    for (var i = 0; i < arr.length; i++){
        if (i === idx){
            arr.pop(arr[i]);
        }
    } 
    console.log(arr);
}

// removeAt(user.mac_operating_systems, 2);
// ========================================================================================
// Convert the given hash's keys to values and values to corresponding keys.
// Given: {a:1,b:2}, return: {1:a,2:b}.
function invertHash(obj) {
    var invertHashObject = {};
    for ( i in obj){
        invertHashObject[obj[i]] = i ;
    }
    
    console.log(invertHashObject);
}

// invertHash(user);
// ========================================================================================
// ========================================================================================

function sList(){
    this.head = null;
} 
function sNode(val){
    this.val = val;
    this.next = null;
}  

// ========================================================================================
// Given a LIST object of a Singly Linked List, pop off the last node.
// Return the LIST object.
function removeLastSLNode(list) {

}

// ========================================================================================
// Given the LIST object of a Singly Linked List, find the node with the val given and remove it.
// Return the LIST object.
function removeSLNodeByVal(list, val) {

}

function dList(){
    this.head = null;
    this.tail = null;
} 
function dNode(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}  

// ========================================================================================
// Given the LIST object of a Doubly Linked List, pop off the last node.
// Return the LIST object.
function removeLastDLNode(list) {

}

// ========================================================================================
// Given the LIST object of a Doubly Linked List, find the node with the val given and remove it.
// Return the LIST object.
function removeDLNodeByVal(list, val) {

}

// ========================================================================================
// Given an array (arr), shift the array values by num.
// Given: arr: [1,2,3,4,5], num: 1, Return: [5,1,2,3,4]
// Given: arr: [1,2,3,4,5], num: 3, Return: [3,4,5,1,2]
function shiftValuesByNum(arr, num) {

}

// Before you submit, please review the following guide lines:

// * * * * * * * * * * * * * *
// * * * Exam Guidelines * * * 
// * * * * * * * * * * * * * *

// Do not change the given function names.
// Do not comment out the given functions.
// Do not change the given function parameters.
// Do not submit broken code (comment out broken code, do not comment out the given function, leave it empty)
// Make sure you are returning the expected data type.
// Remove all console.logs statements before submitting.


module.exports = {
    user,
    reverseString,
    removeLetter,
    factorial,
    isBracketValid,
    isPalindromeStrict,
    insertAt,
    removeAt,
    invertHash,
    removeLastSLNode,
    removeSLNodeByVal,
    removeLastDLNode,
    removeDLNodeByVal,
    shiftValuesByNum
}
