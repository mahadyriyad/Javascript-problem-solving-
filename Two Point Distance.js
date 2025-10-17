function main(input) {
    const lines = input.split('\n');
    const [x1, y1] = lines[0].split(' ').map(Number);
    const [x2, y2] = lines[1].split(' ').map(Number);

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    console.log(`Distance: ${distance.toFixed(2)}`);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
