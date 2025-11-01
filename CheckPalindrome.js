function main(input) {
    const numStr = input.trim();
    const reversed = numStr.split('').reverse().join('');
    if (numStr === reversed) {
        console.log(`${numStr} is a palindrome number`);
    } else {
        console.log(`${numStr} is not a palindrome number`);
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

