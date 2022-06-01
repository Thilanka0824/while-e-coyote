const prompt = require('prompt-sync')({ sigint: true });

let n = Number(prompt("Enter a number: ")) //how many numbers to see in the sequence
let n1 = 0
let n2 = 1

console.log(n1);
console.log(n2);

let nextNumber = n1 + n2

while (nextNumber <= n) {
    console.log(nextNumber)

    n1 = n2;
    n2 = nextNumber;
    nextNumber = n1 + n2;
} 


