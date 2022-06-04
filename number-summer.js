const prompt = require('prompt-sync')({ sigint: true });


let num = prompt("Enter some numbers (type 'done' when complete): ")
let sum = 0

while (num !== "done") {
    sum = sum + Number(num); //sum += num;
    num = prompt("Another one: ");
}
console.log("The total is: " + sum)



// let num = 0
// let sum = 0;

// while (num <= 5) {
//     sum = sum + num;
//     console.log("current sum: " + sum)
//     num++
//     console.log("num: " +  num)
// }

// console.log("final sum: " + sum)