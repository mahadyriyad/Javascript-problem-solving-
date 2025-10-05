function main() {
    const n = 13; 
    if (n <= 1) {
        console.log(`${n} is not a prime number.`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(`${n} is not a prime number.`);
            return;
        }
    }

    console.log(`${n} is a prime number.`);
}

main();
