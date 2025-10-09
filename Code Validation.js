const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const code = input.trim();

    if (code.length !== 7 || code[0] !== '#') {
        console.log(false);
    } else {
        const validPattern = /^[0-9A-Fa-f]{6}$/;
        console.log(validPattern.test(code.slice(1)));
    }

    rl.close();
});
