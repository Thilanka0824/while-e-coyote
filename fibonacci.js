const prompt = require('prompt-sync')({ sigint: true });

// 1st iteration
// 0 1 1 2 3
// p c t

// 2nd iteration
// 0 1 1 2 3
//   p c t

// 3rd iteration
// 0 1 1 2 3
//     p c t

let n = Number(prompt("Enter a value for 'n': "));


let prevNum = 0;
let currentNum = 1;
let total = 0 //prevNum + currentNum;

console.log(prevNum); // accounts for the first 0 in the sequence
let count = 1 // start at 1 to account for the first 0 in the sequence

while (count < n) { //loop runs n times
    
    console.log(currentNum)
    total = prevNum + currentNum; 
    prevNum = currentNum;
    currentNum = total;

    count++;
}

// const prompt = require('prompt-sync')({ sigint: true });

// let n = Number(prompt("Enter a number: ")) //how many numbers to see in the sequence
// let n1 = 0
// let n2 = 1

// console.log(n1);
// console.log(n2);

// let nextNumber = n1 + n2



// while (nextNumber <= n) {
//     console.log(nextNumber)

//     n1 = n2;
//     n2 = nextNumber;
//     nextNumber = n1 + n2;
// }

// const prompt = require('prompt-sync')({sigint: true});

// let n = Number(prompt("Enter a number: "))

// let printedTimes = 1
// let n1 = 1
// let n2 = 0

// while(printedTimes < n ){
//     sum = n1 + n2;
//     n1 = n2;
//     n2 = sum;
//     console.log(sum)
//     printedTimes = printedTimes + 1;
// }

//=============Greyson==============

// const prompt = require('prompt-sync')({ sigint: true });

// let n = Number(prompt("Enter a value for 'n': "));
// let count = 0

// // 1st iteration
// // 0 1 1 2 3
// // p c t

// // 2nd iteration
// // 0 1 1 2 3
// //   p c t

// // 3rd iteration
// // 0 1 1 2 3
// //     p c t

// let prevNum = 0;
// let currentNum = 1;
// let total = 0 //prevNum + currentNum;

// console.log(prevNum);
// while (count < n) { //loop runs n times
    
//     console.log(currentNum)
//     total = prevNum + currentNum;
//     prevNum = currentNum;
//     currentNum = total;

//     count++;
// }