const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (line) => {
    const num = line.trim();
    const reversed = num.split('').reverse().join('');

    if (num === reversed) {
        console.log(`${num} is a palindrome number`);
    } else {
        console.log(`${num} is not a palindrome number`);
    }

    rl.close();
});
