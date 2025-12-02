function main(input) {
    let str = input.toLowerCase();
    let vowels = "aeiou";
    let found = false;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            found = true;
            break;
        }
    }

    if (found) {
        console.log("The string contains a vowel.");
    } else {
        console.log("The string does not contain any vowel.");
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
