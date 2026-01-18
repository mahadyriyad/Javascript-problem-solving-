function main(input) {
    const lines = input.split('\n');
    const [N, X] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);

    const MAX = 1500;
    const OFFSET = MAX;
    let dp = Array(2 * MAX + 1).fill(false);

    // Sum 0 is possible initially
    dp[OFFSET] = true;

    for (let num of arr) {
        let next = Array(2 * MAX + 1).fill(false);

        for (let s = -MAX; s <= MAX; s++) {
            if (dp[s + OFFSET]) {
                // Ignore num
                next[s + OFFSET] = true;

                // +num
                if (s + num <= MAX)
                    next[s + num + OFFSET] = true;

                // -num
                if (s - num >= -MAX)
                    next[s - num + OFFSET] = true;
            }
        }
        dp = next;
    }

    console.log(dp[X + OFFSET] ? "Yes" : "No");
}

let input = "";
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => main(input.trim()));
