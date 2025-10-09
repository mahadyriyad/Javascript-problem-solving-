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
        console.log(0);
        return;
    }

    const arr = inputLines[1].split(' ').map(Number);
    const sorted = [...arr].sort((a, b) => a - b);

    let median;
    if (n % 2 === 0) {
        median = (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    } else {
        median = sorted[Math.floor(n / 2)];
    }

    const sum = arr.filter(x => x < median).reduce((a, b) => a + b, 0);
    console.log(sum);
});
