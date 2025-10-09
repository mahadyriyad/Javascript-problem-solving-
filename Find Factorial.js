const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (line) => {
    const n = parseInt(line.trim());
    let factorial = 1;

    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    console.log(factorial);
    rl.close();
});
