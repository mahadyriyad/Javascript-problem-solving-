function main(input) {
    const s = input.trim(); // number as string
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            const left = (i === 0) || (s[i - 1] !== '0');
            const right = (i === s.length - 1) || (s[i + 1] !== '0');

            if (left && right) {
                count++;
            }
        }
    }

    console.log(count);
}

let input = "";
process.stdin.on("data", (chunk) => {
    input += chunk;
});

process.stdin.on("end", () => {
    main(input);
});
