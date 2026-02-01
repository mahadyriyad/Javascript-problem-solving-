function main(input) {
    const s = input.trim();

    const wordToNumber = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    const num = wordToNumber[s];

    if (num % 2 === 0) {
        console.log(0);
    } else {
        console.log(1);
    }
}

let input = "";
process.stdin.on("data", (chunk) => {
    input += chunk;
});

process.stdin.on("end", () => {
    main(input);
});
