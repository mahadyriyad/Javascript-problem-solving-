function main() {
    const n = 5; 
    const MOD = 1000000007;

    if (n === 0) {
        console.log(0);
        return;
    }
    if (n === 1) {
        console.log(1);
        return;
    }

    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = (a + b) % MOD;
        a = b;
        b = c;
    }

    console.log(b);
}

main();
