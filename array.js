
//Task 1
//--------------------------------------
/* 
function gitLeftDigits(n) {
    //convert the number to a string and git left digit
    let numString = Math.abs(n).toString();
    return parseInt(numString.charAt(0),10);
}
let num=+prompt("Enter a number");
console.log(gitLeftDigits(num))

 */



//Task 2
//--------------------------------------
/* 
function countNumbers(arr) {
    let posetiveCount=0;
    let negativeCount=0;
    let evenCount=0;
    let oddCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            posetiveCount++;
        }   
        else if(arr[i]<0){
            negativeCount++;
        }
        if(arr[i]%2==0){
            evenCount++;
        }
        else if(arr[i]%2!=0){
            oddCount++;
        }

    }
    console.log("Positive numbers:", posetiveCount);
    console.log("Negative numbers:", negativeCount);
    console.log("Even numbers:", evenCount);
    console.log("Odd numbers:", oddCount);

}    
const arr=[10, -11, 12, 13, 14, 15, 16, 17, 18, 19, 20];    
countNumbers(arr);
 */




//Task 3
//--------------------------------------
/* 
function filterIntegers(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===parseInt(arr[i])){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
arr =[1, NaN, 2, 'abc', 4, 5, 6, '7', 8, '9', 10];
filterIntegers(arr) */



//Task 4
//--------------------------------------
/* 
function custumSlice(arr, start, end) {
    let newArr = [];
    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}
arr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
custumSlice(arr, 3, 8); */


//Task 5
//--------------------------------------

/* function findLargestInEachSubArray(arrays) {
    return arrays.map(subArray => Math.max(...subArray));
}

let arr=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(findLargestInEachSubArray(arr)); */


//Task 6
//--------------------------------------
/* 
function checkStringNotLong(str){
    if(str.length>10){
        const firstchar=str[0];
        const lastchar=str[str.length-1];
        const midel=str.length-2;
        const newstr=firstchar+midel+lastchar;
        console.log(newstr);
    }
    else{
        console.log(str);
    }
}

checkStringNotLong("JavaScripttttt") */


//Task 7
//--------------------------------------

/* 
function haveTwoKindOfCharacters(str) {
    if (str.length !==4) {
        return false;
    }

    const charMap = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    const counts = Object.values(charMap);

    return counts.length === 2 && counts.every(count => count === 2);
}
console.log(haveTwoKindOfCharacters("abcd"))
console.log(haveTwoKindOfCharacters("abab"))
console.log(haveTwoKindOfCharacters("abcl"))
 */


//Task 8
//--------------------------------------
/* 
function chechWhoWinXO(arr) {
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "X") {
            xCount++;
        } else if (arr[i] === "O") {
            oCount++;
        }
    }
    if (xCount === oCount) {
        console.log("Tie");
    } else if (xCount > oCount) {
        console.log("X");
    } else {
        console.log("O");
    }
}
arr = ["X", "O", "X", "O", "O", "O", "X", "O", "X"];
chechWhoWinXO(arr);
 */



//Task 9
//--------------------------------------
/* 

function findCharacterIndices(str, char) {
    const indices = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i);
        }
    }
    return indices;
}  
let arr=['c', 'a', 't', 'c', 'o', 'r', 'n', 'a', 'c', 'i', 'o', 'n'];  
console.log(findCharacterIndices(arr, "c")) */



//Task 10
//--------------------------------------


function canSumConsecutive (arr , num){

    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum===num){
                return true;
            }
        }
    }
    return false;

}
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(canSumConsecutive(arr,15))