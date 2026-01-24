function main(input) {
    const lines = input.split('\n');
    const N = parseInt(lines[0]);
    let arr = lines[1].split(' ').map(Number);

    // Sort the array
    arr.sort((a, b) => a - b);

    // Find median
    const median = arr[Math.floor(N / 2)];

    let operations = 0;
    for (let i = 0; i < N; i++) {
        operations += Math.abs(arr[i] - median);
    }

    console.log(operations);
}

let input = "";
process.stdin.on('data', chunk => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
