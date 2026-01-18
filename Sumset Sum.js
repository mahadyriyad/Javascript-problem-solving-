function main(input) {
    const lines = input.split('\n');
    const [N, X] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);

    const dp = Array(X + 1).fill(false);
    dp[0] = true;

    for (let num of arr) {
        for (let s = X; s >= num; s--) {
            if (dp[s - num]) {
                dp[s] = true;
            }
        }
    }

    console.log(dp[X] ? "Yes" : "No");
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

