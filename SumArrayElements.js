function main (input) {
    let lines = input.split("\n");
    let n = parseInt(lines[0]);
    if (n === 0) { 
        console.log(0);
        return;
    }

    let arr = lines[1].split(" ").map(Number);
    arr.sort((a, b) => a - b);

    let median;
    if (n % 2 === 1) {
        median = arr[Math.floor(n / 2)];
    } else {
        median = (arr[n/2 - 1] + arr[n/2]) / 2;
    }

    let sum = arr.filter(x => x < median)
                 .reduce((a, b) => a + b, 0);

    console.log(sum);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});
process.stdin.on('end', () => {
    main(input.trim());
});
