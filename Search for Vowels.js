function main(input) {
    input = input.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of input) {
        if (vowels.includes(char)) {
            console.log("The string contains a vowel.");
            return;
        }
    }
    console.log("The string does not contain any vowel.");
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});
process.stdin.on('end', () => {
    main(input.trim());
});
