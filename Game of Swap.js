function main(input) {
    const [num1, num2] = input.split(' ').map(Number);
    console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
    console.log(`After swapping: num1 = ${num2}, num2 = ${num1}`);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
