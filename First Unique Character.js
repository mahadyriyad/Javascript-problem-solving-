function main(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);
    let idx = 1;

    for (let t = 0; t < T; t++) {
        const S = lines[idx++].trim();
        const freq = {};

        // Count frequency
        for (let ch of S) {
            freq[ch] = (freq[ch] || 0) + 1;
        }

        // Find first non-repeating character
        let found = 'N';
        for (let ch of S) {
            if (freq[ch] === 1) {
                found = ch;
                break;
            }
        }

        console.log(found);
    }
}

let input = "";
process.stdin.on("data", (chunk) => {
    input += chunk;
});

process.stdin.on("end", () => {
    main(input);
});

