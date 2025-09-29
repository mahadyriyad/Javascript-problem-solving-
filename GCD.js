const prompt = require('prompt-sync')({ sigint: true });

const a = parseInt(prompt("Enter the first number: "));
const b = parseInt(prompt("Enter the second number: "));

function gcd(x, y) {
    while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log("GCD:", gcd(a, b));
