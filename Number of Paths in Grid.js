function main(input) {
    const data = input.trim().split(/\s+/);
    let idx = 0;

    const T = Number(data[idx++]);
    let results = [];

    for (let t = 0; t < T; t++) {
        const N = Number(data[idx++]);
        const M = Number(data[idx++]);

        let grid = Array.from({ length: N }, () => Array(M));
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                grid[i][j] = Number(data[idx++]);
            }
        }

        let dp = Array.from({ length: N }, () => Array(M).fill(0));

        // Starting cell
        dp[0][0] = 1;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (grid[i][j] === 1) {
                    dp[i][j] = 0;
                } else {
                    if (i > 0) dp[i][j] += dp[i - 1][j];
                    if (j > 0) dp[i][j] += dp[i][j - 1];
                }
            }
        }

        results.push(dp[N - 1][M - 1]);
    }

    console.log(results.join('\n'));
}

let input = "";
process.stdin.on("data", chunk => input += chunk);
process.stdin.on("end", () => main(input));
