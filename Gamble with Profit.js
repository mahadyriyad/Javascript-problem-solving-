function main(input) {
    const [prob, prize, pay] = input.split(" ").map(Number);
    const result = prob * prize > pay;
    console.log(result ? "true" : "false");
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
