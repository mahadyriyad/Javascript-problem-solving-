function main(input) {
    let [base, exponent] = input.split(" ").map(Number);
    
   
    let result = Math.pow(base, exponent);
    
    console.log(result);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
