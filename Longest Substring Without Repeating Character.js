function main(input) {
    let s = input.trim();
    let seen = new Map();
    let maxLen = 0, start = 0;

    for (let end = 0; end < s.length; end++) {
        if (seen.has(s[end]) && seen.get(s[end]) >= start) {
            start = seen.get(s[end]) + 1;
        }
        seen.set(s[end], end);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    console.log(maxLen);
}

let input = "";
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => main(input.trim()));
