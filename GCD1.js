function main(input) {
    let [a, b] = input.split(" ").map(Number);

    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    console.log(a);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
