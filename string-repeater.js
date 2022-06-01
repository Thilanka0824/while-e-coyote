const prompt = require('prompt-sync')({ sigint: true });

let input = prompt("Enter some letters: ")

while(input.length < 10) {
    input = input + input
    console.log(input)
}
console.log("More than 10 letters")