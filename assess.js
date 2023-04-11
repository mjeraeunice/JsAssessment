//Write a function that takes in a string and returns it when reversed
//let food = “eating”
// let food= "eating"
// let newString=food.reverse();
// console.log(newString);

//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
function merge(num){
   if(num.length<=1){
 return num
   }
    
    const middle=Math.floor(num.length/2);
    const left=num.slice(0,middle);
    const right=num.slice(middle);

    return merging(merge(left),merge(right));
}
function merging(left,right){
const result=[];
while(left.length&&right.length){
if(left[0]<right[0]){
    result.push(left.shift());
}
else{
    result.push(right.shift());
}
}
console.log([result]);
return result.concat(left,right);
}

function binarySearch(num, target){
    let left=0;
    let right= num.length-1
    while(left<=right){
        const mid= Math.floor((left+right)/2)
        if(num[mid]===target){
            return mid;
        }
        else if(num[mid]<target){
            left=mid+1;
        }
        else{
            right=mid-1
        }

    } 
    return null;
}
let num = [2,8,0,23,5,45,76]
let target = 23

const sortedNum= merge(num);
const targetIndex=binarySearch(sortedNum,target);

console.log(targetIndex)

// //Given years between 2000 and 2023, console all the leap years in the following
// //sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// function leapYears(years){
//     let i=0;
//     if(i in years  %3==0){
//         console.log("$year is a leap year");
//     }
//     else{
//         console.log("$year is not a leap year")
//     }
// }
// let years=[2000,2001,2003,2004,2005,2006,2007,2008,2009,2023]
// leapYears(years);




//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
// let i=0
// if(i)




//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
// function multiply(numArray){
//     for(let i=0;numArray(i);i++){
//         // console.log(i*4)
//         // i++
//     }
//     console.log(i*4)
//     }
//     let numArray = [12,87,45,75,23,64,73]


//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]
// function turned(nums){
//     let nums= [“10”,”24”,”45”,”56”,”67”];
// console.log(nums.convertToInt())
// }
    
