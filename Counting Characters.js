function main(input) {
    console.log(input.length);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});
process.stdin.on('end', () => {
    main(input.trim());
});
