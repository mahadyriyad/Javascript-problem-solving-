function main (input) {
    let s = input.trim();
    let valid = /^#[0-9A-Fa-f]{6}$/.test(s);
    console.log(valid ? "true" : "false");
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});
process.stdin.on('end', () => {
    main(input.trim());
});
