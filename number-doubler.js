const prompt = require('prompt-sync')({ sigint: true });


let num = Number(prompt("Enter a number below 100: "))

while (num <= 100) {
    num = num * 2
    console.log(num)
}

console.log("done")