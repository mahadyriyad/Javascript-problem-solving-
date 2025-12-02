function main (input) {
    let lines = input.trim().split("\n");
    let n = parseInt(lines[0]);
    let matrix = [];

    for (let i = 1; i <= n; i++) {
        matrix.push(lines[i].split(" ").map(Number));
    }

    let rotated = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - 1 - i] = matrix[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        console.log(rotated[i].join(" "));
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});
process.stdin.on('end', () => {
    main(input.trim());
});
