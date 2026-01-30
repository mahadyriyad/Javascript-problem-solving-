function main(input) {
    const lines = input.split('\n');
    const [N, W] = lines[0].split(' ').map(Number);
    
    const items = [];
    for (let i = 1; i <= N; i++) {
        const [w, v] = lines[i].split(' ').map(Number);
        items.push([w, v]);
    }
    
    // dp[w] = max value with capacity w
    const dp = new Array(W + 1).fill(0);
    
    for (let i = 0; i < N; i++) {
        const [weight, value] = items[i];
        
        // go backwards
        for (let w = W; w >= weight; w--) {
            dp[w] = Math.max(dp[w], dp[w - weight] + value);
        }
    }
    
    console.log(dp[W]);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
