const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line.trim());
});

rl.on('close', () => {
    const N = parseInt(inputLines[0]);
    if (N === 0) {
        console.log("Element not found");
        return;
    }

    const arr = inputLines[1].split(' ').map(Number);
    const target = parseInt(inputLines[2]);

    let left = 0;
    let right = N - 1;
    let found = false;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log(mid);
            found = true;
            break;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (!found) console.log("Element not found");
});
