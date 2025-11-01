function main(input) {
    // Split input into lines and values
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]); // size of array
    const arr = lines[1].split(' ').map(Number);

    if (n === 0) {
        console.log(0);
        return;
    }

    // Sort the array to find the median
    arr.sort((a, b) => a - b);

    let median;
    if (n % 2 === 1) {
        // Odd number of elements
        median = arr[Math.floor(n / 2)];
    } else {
        // Even number of elements → take average of two middle elements
        median = (arr[n / 2 - 1] + arr[n / 2]) / 2;
    }

    // Sum all elements less than the median
    const sum = arr.filter(x => x < median).reduce((a, b) => a + b, 0);

    console.log(sum);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
