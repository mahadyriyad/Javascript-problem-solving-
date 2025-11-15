function main(input) {
    const [m, v] = input.split(" ").map(Number);
    const ke = Math.round(0.5 * m * v * v);
    console.log(ke);
}

let input = "";
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => { main(input.trim()); });
