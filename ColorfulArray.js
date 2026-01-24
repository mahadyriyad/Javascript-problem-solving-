function main(input) {
    const lines = input.split('\n');
    const N = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);

    let maxColors = 1;
    let currentCount = 1;

    for (let i = 1; i < N; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
            maxColors = Math.max(maxColors, currentCount);
        } else {
            currentCount = 1;
        }
    }

    console.log(maxColors);
}

let input = "";
process.stdin.on('data', chunk => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
