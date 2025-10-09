const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];

rl.on('line', (line) => {
    inputLines.push(line.trim());
    if (inputLines.length === 2) {
        rl.close();
    }
});

rl.on('close', () => {
    const n = parseInt(inputLines[0]);
    if (n === 0) {
        console.log(false);
        return;
    }

    const arr = inputLines[1].split(' ').map(Number);

    const unique = new Set(arr);
    if (unique.size !== n) {
        console.log(false);
        return;
    }

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    console.log(max - min === n - 1);
});
