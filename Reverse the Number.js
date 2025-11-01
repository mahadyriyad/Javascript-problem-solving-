function main(input) {
    const numStr = input.trim();
    const reversed = numStr.split('').reverse().join('');
    console.log(parseInt(reversed, 10));
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
